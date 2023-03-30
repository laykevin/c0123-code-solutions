import { useState } from "react";

export default function ValidatedInput() {
  const [password, setPassword] = useState('');
  const regExDigit = /[0-9]+/;
  const regExUppercase = /[A-Z]+/;
  const regExSpecial = /[!@#$%^&*()]+/;
  let textColor = 'red';
  let check = '❌';
  let text = 'A password is required.';

  if (password.length > 0 && password.length < 8) {
    text = 'Your password is too short.';
  } else if (password.length > 7 && !regExDigit.test(password)) {
    text = 'Must contain a number!';
  } else if (password.length > 7 && !regExUppercase.test(password)) {
    text = 'Must contain a capital letter!';
  } else if (password.length > 7 && !regExSpecial.test(password)) {
    text = 'Must contain a special character "!, @, #, $, %, ^, &, *, (, or )';
  } else if (password.length > 7) {
    text = "That's a strong password! 💪";
    check = '✔️';
    textColor = 'green';
  }

  return (
    <form>
      <label style={{ display: "block"}} htmlFor="pw">Password</label>
      <input id="pw" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
      {check}
      <div style={{ color: textColor, position: 'absolute' }}>
        {text}
      </div>
    </form>
  )
}
