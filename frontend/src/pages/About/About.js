import '../About/About.css'
import facebookIcon from '../../Assets/Icons/facebook.png'
import instagramIcon from '../../Assets/Icons/instagram.png'
import twitterIcon from '../../Assets/Icons/twitter.png'
import pinterestIcon from '../../Assets/Icons/pinterest.png'
import tiktokIcon from '../../Assets/Icons/tiktok.png'

function About() {
    return (
        <div className="AboutContainer">
            <div className='AboutHeaderDiv'>
                <h1>About Us</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce fermentum, sem in bibendum vehicula, leo turpis dictum lacus, a egestas risus massa commodo mi. Pellentesque a enim varius, ornare magna et, vehicula mauris. </p>
            </div>
            <div className='SocialsContainer'>
                <div className='SocialDiv'>
                    <img src={facebookIcon} alt='Facebook icons created by Freepik - Flaticon' className='SocialIconn' />
                    {/* <a href="https://www.flaticon.com/free-icons/facebook" title="facebook icons">Facebook icons created by Freepik - Flaticon</a> */}
                    <h2>Facebook</h2>
                    <p>Donec orci turpis, pellentesque non ultricies non, ornare in mi. Ut aliquet enim ac arcu laoreet ornare. Aenean pellentesque auctor egestas. Cras pellentesque elit sit amet facilisis tempus. Aliquam quis purus sed libero tincidunt semper.</p>
                </div>
                <div className='SocialDiv'>
                    <img src={instagramIcon} alt='Instagram icons created by Freepik - Flaticon' className='SocialIconn' />
                    {/* <a href="https://www.flaticon.com/free-icons/instagram" title="instagram icons">Instagram icons created by Freepik - Flaticon</a> */}
                    <h2>Instagram</h2>
                    <p>Donec orci turpis, pellentesque non ultricies non, ornare in mi. Ut aliquet enim ac arcu laoreet ornare. Aenean pellentesque auctor egestas. Cras pellentesque elit sit amet facilisis tempus. Aliquam quis purus sed libero tincidunt semper.</p>
                </div>
                <div className='SocialDiv'>
                    <img src={twitterIcon} alt='Twitter icons created by Pixel perfect - Flaticon' className='SocialIconn' />
                    {/* <a href="https://www.flaticon.com/free-icons/twitter" title="twitter icons">Twitter icons created by Pixel perfect - Flaticon</a> */}
                    <h2>Twitter</h2>
                    <p>Donec orci turpis, pellentesque non ultricies non, ornare in mi. Ut aliquet enim ac arcu laoreet ornare. Aenean pellentesque auctor egestas. Cras pellentesque elit sit amet facilisis tempus. Aliquam quis purus sed libero tincidunt semper.</p>
                </div>
                <div className='SocialDiv'>
                    <img src={pinterestIcon} alt='Pinterest icons created by riajulislam - Flaticon' className='SocialIconn' />
                    {/* <a href="https://www.flaticon.com/free-icons/pinterest" title="pinterest icons">Pinterest icons created by riajulislam - Flaticon</a> */}
                    <h2>Pinterest</h2>
                    <p>Donec orci turpis, pellentesque non ultricies non, ornare in mi. Ut aliquet enim ac arcu laoreet ornare. Aenean pellentesque auctor egestas. Cras pellentesque elit sit amet facilisis tempus. Aliquam quis purus sed libero tincidunt semper.</p>
                </div>
                <div className='SocialDiv'>
                    <img src={tiktokIcon} alt='Tiktok icons created by Freepik - Flaticon' className='SocialIconn' />
                    {/* <a href="https://www.flaticon.com/free-icons/tiktok" title="tiktok icons">Tiktok icons created by Freepik - Flaticon</a> */}
                    <h2>Tik-Tok</h2>
                    <p>Donec orci turpis, pellentesque non ultricies non, ornare in mi. Ut aliquet enim ac arcu laoreet ornare. Aenean pellentesque auctor egestas. Cras pellentesque elit sit amet facilisis tempus. Aliquam quis purus sed libero tincidunt semper.</p>
                </div>
            </div>
            <div className='StoryDiv'>
                <h1>Our Story</h1>
                <p>Donec tempus arcu vel nisl feugiat gravida. Vestibulum nec ipsum luctus ipsum molestie vestibulum. Curabitur vel sapien feugiat, convallis ante sed, ornare elit. Integer accumsan, enim ac fermentum ultricies, justo mauris maximus massa, vel ornare elit lectus ut tortor. Sed sit amet urna nisl. Nulla dapibus lorem ut molestie cursus. Phasellus in elit vitae lacus porta gravida ac a eros. Duis imperdiet et odio sit amet pharetra. Mauris viverra pellentesque leo, ac condimentum justo lacinia convallis. In vitae tristique turpis. Ut suscipit eros sed dictum condimentum. Nulla facilisi.</p>
                <p>Vestibulum accumsan ac diam eget varius. Nulla eget ornare nulla. Suspendisse fringilla tincidunt viverra. Nunc dictum vulputate elit eget vulputate. Nulla dictum molestie lectus, eget congue neque consectetur et. Curabitur lobortis nisl a ipsum faucibus tincidunt. Aenean luctus eros pellentesque, gravida magna bibendum, viverra lectus. In sed ipsum sit amet arcu fermentum pellentesque. Duis auctor eros non arcu tincidunt pulvinar. Duis vulputate volutpat porttitor. Proin mauris nunc, malesuada vel justo id, pulvinar viverra turpis. Sed elementum ipsum ipsum, at aliquam lectus fringilla eu. Aenean sit amet interdum leo, vitae faucibus metus. Ut dapibus lacinia tortor eu vulputate. Fusce auctor tellus ac placerat maximus.</p>
            </div>
        </div>
    );
}

export default About;
