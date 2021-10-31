import './App.css';
import { useForm } from "react-hook-form";
// import { useEffect } from 'react';

// function debounce(func, delay = 1000) {
//   let timer;
//   return (...args) => {
//       // console.log(...args);
//       clearTimeout(timer);
//       timer = setTimeout(() => func.apply(this, ...args), delay);
//   };
// }

const customCss = {
  width: '10%',
  margin: '0px'
};

function App() {
  const {
    register,
    handleSubmit,
    // watch,
    // trigger,
    formState: { errors, isValid }
  } = useForm({
    defaultValues: { account: '123', password: '', rememberMe: false },

    // validate: (values) => {

    //   const errors = {};
    //   if (!values.account) {
    //     errors.account = 'account is required. ';
    //   } else if (values.account.length > 100) {
    //     errors.account = 'account is too much. ';
    //   }

    //   if (!values.password) {
    //     errors.password = 'password is required';
    //   } else if (values.account.length < 8) {
    //     errors.password = 'password is too short. ';
    //   } else if (values.account.length > 100) {
    //     errors.password = 'password is too much. ';
    //   }

    //   return errors;
    // },

    valueChanges: (e) => {
      console.log('handleChange');
      console.log(e);
    },

  });

  const onSubmit = (values) => {
    console.log('submit');
    console.log(values);
  }; // your form submit function which will invoke after successful validation

  // console.log(watch()); // you can watch individual input by pass the name of the input
  
  // useEffect(() => {
  //   // console.log('useEffect');
  //   console.log(isValid);
  //   console.log(errors);
  // });

  // const valueChanges = (data) =>{
  //   console.log('valueChanges');
  //   console.log(data);
  //   trigger()
  //   console.log(isValid);
  // }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
    {/* <form onSubmit={handleSubmit(onSubmit)} onChange={debounce(valueChanges, 500)}> */}
      {/* register your input into the hook by invoking the "register" function */}
      <input {...register("account", { required: "Account is required", maxLength: { value: 100, message: 'Length cannot be big than 100. '} })} />
      {errors.account && <p> {errors.account?.message} </p>}
      {/* include validation with required or other standard HTML validation rules */}
      {/* <input type="password" {...register("password", { required: true, maxLength: 100, minLength: 8 })} /> */}
      <input type="password" {...register("password", { required: true })} />
      {/* errors will return when field validation fails  */}
      {errors.password && <p>Password is required</p>}

      <label>
        <input style={customCss} type="checkbox" {...register("rememberMe")} />
        Remember Me
      </label>

      {/* <input type="submit" disabled={!isValid}/> */}
      <input type="submit" />
      {/* <buttonDisabled /> */}
    </form>
  );
}

// function App() {

//   const { handleChange, handleSubmit, values, formState: { errors } } = useForm({
//     initialValues: { account: '', password: '', rememberMe: false },

//     validation: (values) => {
//       const errors = {}
//       if (!values.account) {
//         errors.account = '請輸入帳號'
//       } else if (!values.password) {
//         errors.password = '請輸入密碼'
//       }
//       return errors
//     },

//     handleChange: (e) => {
//       console.log(e);
//     },

//     onSubmit: (values) => console.table(values),

//     // handleSubmit: (values) => console.table(values)
//   })
//   return (
//     <div className="form">
//       <input name="account" onChange={handleChange} 
//         placeholder="Account" />
//       {errors.account && (<div style={{ color: 'red' }}>{errors.account}</div>)}

//       <input name="password" onChange={handleChange}
//         placeholder="password" />
//       {errors.password && (<div style={{ color: 'red' }}>{errors.password}</div>)}

//       <label><input style={customCss} type="checkbox" name="rememberMe" onChange={handleChange} />Remember Me</label>

//       <button onClick={handleSubmit} disabled={useEffect(() => errors)}>Login</button>
//     </div>
//   )
// }

export default App;
