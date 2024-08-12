'use client';
import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';

interface Bookmarks {
  id: string;
  logoUrl: string;
  title: string;
  orgName: string;
  dateBookmarked: string;
  opType: string;
}

const Favorite = () => {
  const [bookmark, setbookmark] = useState<Bookmarks[]>([]);
  const session = useSession();
  const accessToken = session?.data?.user?.accessToken;

  useEffect(() => {
    const fetchBookmark = async () => {
      try {
        const response = await fetch('https://akil-backend.onrender.com/bookmarks', {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        if (!response.ok) {
          throw new Error('Failed to fetch jobs');
        }
        const data = await response.json();
        setbookmark(data.data);
        console.log(data.data);
      } catch (error) {
        console.error('Error fetching jobs:', error);
      }
    };

    fetchBookmark();
  }, [accessToken]);

  return (
    <div data-testid="favorite-bookmarks" className="w-5/6 flex flex-col items-center gap-6 justify-center">
      {bookmark.map((item, index) => (
        <div key={index} data-testid={`bookmark-${index}`} className="flex p-3 rounded-3xl bg-white w-11/12 border-2">
          <div>
            <img
              src={item.logoUrl}
              alt="Job Image"
              data-testid={`bookmark-logo-${index}`}
              className="w-[66px] h-[59px]"
            />
          </div>

          <div className="flex flex-col gap-2 ml-4 w-5/6">
            <h2 data-testid={`bookmark-title-${index}`} className="text-lg font-bold">
              {item.title}
            </h2>

            <p data-testid={`bookmark-orgname-${index}`} className="text-xs text-gray-600">
              {item.orgName}
            </p>

            <div className="flex items-center gap-1">
              <p>Bookmarked on :</p>
              <p data-testid={`bookmark-date-${index}`} className="text-lg text-gray-600">
                {new Date(item.dateBookmarked).toLocaleDateString()}
              </p>
            </div>
            <div className="flex w-1/2 justify-between">
              <button data-testid={`bookmark-optype-${index}`} className="bg-[#56cdad38] px-4 py-2 rounded-full text-[#56CDAD]">
                {item.opType}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Favorite;
