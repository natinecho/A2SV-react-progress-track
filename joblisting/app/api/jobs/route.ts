import path from 'path';
import { promises as fs } from 'fs';
import { NextResponse } from 'next/server';

export interface Job {
  id: string;
  title: string;
  description: string;
  responsibilities: string[];
  ideal_candidate: {
    age: string;
    gender: string;
    traits: string;
  };
  when_where: string;
  about: {
    posted_on: string;
    deadline: string;
    location: string;
    start_date: string;
    end_date: string;
    categories: string[];
    required_skills: string[];
  };
  company: string;
  image: string;
}

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), 'lib', 'jobs.json');
    const fileContents = await fs.readFile(filePath, 'utf8');
    const jobs: Job[] = JSON.parse(fileContents).job_postings;
    return NextResponse.json({ jobs: jobs }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to load jobs data' }, { status: 500 });
  }
}
