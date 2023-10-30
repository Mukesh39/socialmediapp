import './rightbar.css';
import { Users } from '../../dummyData';
import Online from "../online/Online";

//here is profile send through Profile Page not Home Page 
//profile you can see send in profile page as props 

const Rightbar = ({profile}) => {

  console.log(Users);




const Homerightbar =()=>{
 return (
  
  
  <>
  
          <div className="birthdayContainer">
          <img  className='birthdayImg' src="/assets/heart.png" alt="obama" srcset="" />
          <span className='birthdayText'> <b>Mukesh</b>  and  <b>Three Other friends </b> have a birthday today </span>
        </div>
        <img className='rightbarAd' src="/assets/elon.webp" alt="eightbarAds"  />
        <div className="rightbarTitle">Online Friends</div>
        <ul className="rightbarFriendList">
        {Users.map(u=>(
          <Online key={u.id} user={u}/>
           ))}
         </ul>      
  </>
  )}

  const ProfileRightbar =()=>{
    return (
      <>
      <div className="rightbarTitle"> User Information </div>
    <div className="rightbarInfo">
      <div className="rightbarInfoItem">
           <span className="rigtbarInfoKey">City : </span>
          <span className="rigtbarInfoValue">Lucknow : </span>
      </div>
      <div className="rightbarInfoItem">
           <span className="rigtbarInfoKey">From  : </span>
          <span className="rigtbarInfoValue">India : </span>
      </div>
      <div className="rightbarInfoItem">
           <span className="rigtbarInfoKey">Relationship : </span>
          <span className="rigtbarInfoValue">Single : </span>
      </div>

      </div>


      <div className="rightbarTitle"> User Friends </div>

         <div className="rightbarFollowings">


         <div className="rightbarFollowing">
         <img src="/assets/elon.webp" alt="" className="rightbarFollowingImg" />
         <span className="rightbarFollwingName">Elon Bro </span>
         </div>

         <div className="rightbarFollowing">
         <img src="/assets/elon.webp" alt="" className="rightbarFollowingImg" />
         <span className="rightbarFollwingName">Elon Bro </span>
         </div>

         <div className="rightbarFollowing">
         <img src="/assets/elon.webp" alt="" className="rightbarFollowingImg" />
         <span className="rightbarFollwingName">Elon Bro </span>
         </div>

         <div className="rightbarFollowing">
         <img src="/assets/elon.webp" alt="" className="rightbarFollowingImg" />
         <span className="rightbarFollwingName">Elon Bro </span>
         </div>

         <div className="rightbarFollowing">
         <img src="/assets/elon.webp" alt="" className="rightbarFollowingImg" />
         <span className="rightbarFollwingName">Elon Bro </span>
         </div>

         <div className="rightbarFollowing">
         <img src="/assets/elon.webp" alt="" className="rightbarFollowingImg" />
         <span className="rightbarFollwingName">Elon Bro </span>
         </div>
        

         </div>
      
      
      
      </>



    ) }

  return (
    <div className='rightbar'>
            <div className="rightWrapper">
            {profile ?   <ProfileRightbar/> :  <Homerightbar/> } 
          </div>
          
    </div>
  );
}

export default Rightbar ; 