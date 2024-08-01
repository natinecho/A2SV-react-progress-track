import { useForm } from 'react-hook-form'
import './App.css'
import { useEffect } from 'react';

type FormType = {
  name:string;
  email:string;
  message:string;
  social:{
    telegram:string
    instagram:string
  }
}


function App() {

  
  const form = useForm<FormType>({
    defaultValues:{
      name:"",
      email:"",
      message:"",
      social:{
        telegram:"",
        instagram:""
      }
    },
  });
  const {register,handleSubmit,formState,reset} = form;
  const { errors, isSubmitSuccessful } = formState;

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  const onSubmit =(data:FormType)=>{
    console.log(data)
  }

  return (
    <>
    <form  onSubmit={handleSubmit(onSubmit)} noValidate>

      <input type="text"className="input" {...register("name",{
        required:{
            value:true,
            message:"name is required",
        }  
      }   
      )}  placeholder='enter name'/>
      <p>{errors.name?.message}</p>

      <input type="text"className="input" {...register("email",{
        required:"email is required",
        pattern:{
          value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
          message:"invalid email format"
        },

        validate:{ 
          noteOwner: (fieldValue)=>{
              return !fieldValue.endsWith("gmail.com")||"this is email is not supported"
          }
        }
      })}   placeholder='enter your email address'/>
      <p>{errors.email?.message}</p>

      <textarea  className="textarea" {...register("message", {
          required :"message is required"
        })
       
      }  placeholder='your message here'/>
     

      <p>{errors.message?.message}</p>
      <div className='socials'>
          <input  className="input" {...register("social.telegram")} placeholder='telgram handle'/>
          <input  className="input" {...register("social.instagram")}  placeholder='linkedIn profile'/>
      </div>


      <button >Summit</button>


    </form>
    </>
  )
}

export default App

