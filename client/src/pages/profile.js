import React,{useContext, useState} from 'react'
import '../components/profile/styles.scss'
import  Form  from '../components/form';
import Careers from '../data/careers.json'
import { FirebaseContext } from '../context/firebase';

const Profile = () => {
    const{ firebase }=useContext(FirebaseContext)
    const [profileData, setProfileData] = useState({
        Fullname:'',city:'',country:'',emailAddress:'',Bio:'',Tag:''
    })
    const [filledForm, setFilledForm]=useState(false)
    const isInvalid=profileData.Fullname===""
    const handleSubmit=async(e)=>{
        e.preventDefault()
        try{
        setFilledForm(!filledForm)
        const db=firebase.firestore();
        db.settings({
            timestampsinSnapshots:true
        });
        const userRef= await db.collection("Users-data").add({
            Bio:profileData.Bio,
            City:profileData.city,
            Country:profileData.country,
            Name: profileData.Fullname,
            Tag:profileData.Tag,
            emailAddress:profileData.emailAddress
        })
        }
        catch(error){
          console.log(error)
        }
    }
    return (
        <>
        {!filledForm&&
        <Form style={{background:'#e6b800'}}>
        <Form.Base autoComplete="off" onSubmit={handleSubmit} noValidate method="POST">
         <Form.Title style={{fontWeight:'300'}}>Set up your profile</Form.Title>
          <Form.Input
                placeholder="Full Name"
                value={profileData.Fullname}
                onChange={(e) => setProfileData({...profileData,Fullname:e.target.value})}
                />
           <Form.Input
                placeholder="Email address"
                value={profileData.emailAddress}
                onChange={(e) => setProfileData({...profileData,emailAddress:e.target.value})}
                />
             <div style={{display:"flex",margin:'0',padding:'0'}}>
            <Form.Input
                style={{width:'50%',marginRight:'1em'}}
                placeholder="City"
                value={profileData.city}
                onChange={(e) => setProfileData({...profileData,city:e.target.value})}
                />
            <Form.Input
                style={{width:'50%'}}
                placeholder="Country"
                value={profileData.country}
                onChange={(e) => setProfileData({...profileData,country:e.target.value})}
                />    
            </div>
            <Form.Input
                placeholder="Tell us something about yourself"
                value={profileData.Bio}
                onChange={(e) => setProfileData({...profileData,Bio:e.target.value})}
            />
            <Form.Select
            style={{color : profileData.Tag?'black':'grey'}}
            onChange={(e) => {
                setProfileData({...profileData,Tag:e.target.value});
            }}>
            <option style={{color:'gray'}} value="" selected disabled hidden>Select a Field</option>
            {Careers.map(option=><option key={option.id} value={option.profession}>{option.profession}</option>)}
            </Form.Select>
            <Form.Submit type="submit" disabled={isInvalid}>
                        Set Up
            </Form.Submit>
            </Form.Base>
        </Form>
}
        {filledForm &&
        <div className="container">
        <div className="profile-header">
            <div className="profile-img">
               <img src='assets/images/cheklist2.png' width="200" alt="Profile Image"/>
            </div>
            <div className="profile-nav-info">
            <h3 className="user-name">{profileData.Fullname}</h3>
            <div className="address">
                <p id="state" className="state">{profileData.city} ,</p>
                <span id="country" className="country">{profileData.country}</span>
            </div>

            </div>
            <div className="profile-option">
            <div className="notification">
                <i className="fa fa-bell"></i>
                <span className="alert-message">3</span>
            </div>
            </div>
        </div>

        <div className="main-bd">
            <div className="left-side">
            <div className="profile-side">
                <p className="mobile-no"><i className="fa fa-phone"></i> +23470xxxxx700</p>
                <p className="user-mail"><i className="fa fa-envelope"></i>{profileData.emailAddress}</p>
                <div className="user-bio">
                <h3>Bio</h3>
                <p className="bio">
                    {profileData.Bio}
                </p>
                </div>
                <div className="profile-btn">
                <button className="chatbtn" id="chatBtn"><i className="fa fa-comment"></i> Chat</button>
                <button className="createbtn" id="Create-post"><i className="fa fa-plus"></i> Create</button>
                </div>
                <div className="user-rating">
                <h3 className="rating">4.5</h3>
                <div className="rate">
                    <div className="star-outer">
                    <div className="star-inner">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                    </div>
                    </div>
                    <span className="no-of-user-rate"><span>123</span>&nbsp;&nbsp;reviews</span>
                </div>

                </div>
            </div>

            </div>
            <div className="right-side">

            <div className="nav">
                <ul>
                {//<li onClick="tabs(0)" className="user-post active">Posts</li>
                //<li onClick="tabs(1)" className="user-review">Reviews</li>
                //<li onClick="tabs(2)" className="user-setting"> Settings</li>
                }
                </ul>
            </div>
            <div className="profile-body">
                <div className="profile-posts tab">
                <h1>Your Post</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa quia sunt itaque ut libero cupiditate ullam qui velit laborum placeat doloribus, non tempore nisi ratione error rem minima ducimus. Accusamus adipisci quasi at itaque repellat sed
                    magni eius magnam repellendus. Quidem inventore repudiandae sunt odit. Aliquid facilis fugiat earum ex officia eveniet, nisi, similique ad ullam repudiandae molestias aspernatur qui autem, nam? Cupiditate ut quasi iste, eos perspiciatis maiores
                    molestiae.</p>
                </div>
                <div className="profile-reviews tab">
                <h1>User reviews</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam pariatur officia, aperiam quidem quasi, tenetur molestiae. Architecto mollitia laborum possimus iste esse. Perferendis tempora consectetur, quae qui nihil voluptas. Maiores debitis
                    repellendus excepturi quisquam temporibus quam nobis voluptatem, reiciendis distinctio deserunt vitae! Maxime provident, distinctio animi commodi nemo, eveniet fugit porro quos nesciunt quidem a, corporis nisi dolorum minus sit eaque error
                    sequi ullam. Quidem ut fugiat, praesentium velit aliquam!</p>
                </div>
                <div className="profile-settings tab">
                <div className="account-setting">
                    <h1>Acount Setting</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit omnis eaque, expedita nostrum, facere libero provident laudantium. Quis, hic doloribus! Laboriosam nemo tempora praesentium. Culpa quo velit omnis, debitis maxime, sequi
                    animi dolores commodi odio placeat, magnam, cupiditate facilis impedit veniam? Soluta aliquam excepturi illum natus adipisci ipsum quo, voluptatem, nemo, commodi, molestiae doloribus magni et. Cum, saepe enim quam voluptatum vel debitis
                    nihil, recusandae, omnis officiis tenetur, ullam rerum.</p>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>}
        </>
    )
}

export default Profile
