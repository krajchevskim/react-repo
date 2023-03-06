import { useState } from "react";

const FieldInput = ({userObj, setUserObj}) => {

    const [isFieldClicked, setIsFieldClicked] = useState({
        pass: true,
        comment: true,
    }); // почетни вредности за полињата кои се кликаат, password и comment

    const handleOnChange = (e) => {
        setUserObj(prevState => {
            return {...prevState, [e.target.name] : e.target.value }
        });
    }; // секоја промена во input полињата се евидентира тука, освен за app полето, бидејќи за тоа има посебна компонента

  return ( Object.keys(userObj).map((field, index) => {
        return <div key={index}>
                {
                    // во овие загради има тернарен оператор
                    (field === 'comment' && !isFieldClicked[field]) // услов за проверка
                    ? <textarea name={field} onChange={handleOnChange} value={userObj[field]} /> // if
                    : field !== 'app' && <input type={field === 'pass' && isFieldClicked[field] ? "password" : "text"} name={field} value={`${userObj[field]}`} onChange={handleOnChange} /> // else
                    
                } 

                { (field === 'pass' || field === 'comment') && <input type="button" name={field} onClick={() => setIsFieldClicked({...isFieldClicked,[field] : !isFieldClicked[field]})} value={isFieldClicked[field] ? "Show" : "Hide"} /> /** тука проверувам дали полето е pass или comment и ако да, додавам копче */}
        </div>
    }));
}

export default FieldInput