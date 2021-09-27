import React from 'react';
import './topbar.css';
import { NotificationsNone, Language, Settings} from '@material-ui/icons';
export default function Topbar(){
    return <div className="topbar">
        <div className="topbarWrapper">
            <div className="topLeft">
                <h2>Mohamed panel</h2>
            </div>
            <div className="topRight">
                <div className="notificationIcons">
                    <NotificationsNone />
                </div>
                <div className="languageIcon">
                    <Language />
                </div>
                <div className="settingsIcon">
                    <Settings />
                </div>
                <img src="https://cdn.vox-cdn.com/thumbor/J2XSqgAqREtpkGAWa6rMhkHA1Y0=/0x0:1600x900/1400x933/filters:focal(672x322:928x578):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/66320060/Tanjiro__Demon_Slayer_.0.png" alt="" className="avatarTop"/>
            </div>
        </div>

    </div>
}