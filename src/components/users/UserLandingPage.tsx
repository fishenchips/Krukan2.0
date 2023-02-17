import { useAddUserInfo } from "@/queries/users/hooks/useAddUserInfo";
import { positions } from "@/utils/positions";
import { SyntheticEvent, useRef } from "react";

export const UserLandingPage = () => {
  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const positionRef = useRef<HTMLSelectElement>(null);

  const enteredFirstName = firstNameRef.current?.value;
  const enteredLastName = lastNameRef.current?.value;
  const enteredPosition = positionRef.current?.value;

  console.log(enteredFirstName);

  const userData = {
    firstName: enteredFirstName,
    lastName: enteredLastName,
    position: enteredPosition,
  };

  const { mutate } = useAddUserInfo(userData);

  const handlePatchUser = async (e: SyntheticEvent) => {
    e.preventDefault();

    console.log(userData);
    mutate();
  };

  return (
    <div>
      <h4>Please Provide us with some info about yourself!</h4>
      <form onSubmit={handlePatchUser}>
        <div>
          <label htmlFor="firstName">First name</label>
          <input type="text" name="firstName" ref={firstNameRef} />
        </div>
        <div>
          <label htmlFor="lastName">Last name</label>
          <input type="text" name="lastName" ref={lastNameRef} />
        </div>
        <div>
          <label htmlFor="position">Preferred position</label>
          <select name="position" defaultValue="" ref={positionRef}>
            <option value="" disabled>
              --Select your position--
            </option>
            {positions.map((position) => (
              <option value={position} key={position}>
                {position}
              </option>
            ))}
          </select>
        </div>
        <div>
          <button type="submit">Send</button>
        </div>
      </form>
    </div>
  );
};
