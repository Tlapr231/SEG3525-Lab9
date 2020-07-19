import React, { Component } from 'react';
import { Link } from 'react-router-dom'

// Picture Imports
import logo from './images/shield.png'
import search from './images/search.png'
import signup from './images/signup.png'
import signin from './images/signin.png'
import language from './images/language.png'
import calendar from './images/calendar.png'
import myclubs from './images/myclubs.png'
import messages from './images/message.png'
import profile from './images/profile.png'
import signout from './images/signout.png'

//PROPS { user, userSignOut }
class Navigation extends Component {

    render() {
        if (this.props.user.id <= 0) {

            // modified from https://getbootstrap.com/docs/4.0/components/navbar/
            return (

                <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top pt-0 pb-0">

                    {/* J'ai oublier de prendre en note le lien de ce logo, cependant je l'ai editer moi meme donc ces peut etre "Fair use" */}
                    <Link to="/" className="navbar-brand"><img src={logo} alt="" width="48px"/>uClub</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto"> {/* Left side of the nav bar */}
                            <li className="nav-item">
                                {/* https://www.iconfinder.com/icons/298865/search_icon */}
                                <Link to="/clubs" className="nav-link"><img src={search} alt="" width="16px"/> Find a Club</Link>
                            </li>
                        </ul>

                        <ul className="navbar-nav"> {/* Right side of the nav bar */}
                            <li className="nav-item mr-auto">
                                {/* https://www.iconfinder.com/icons/383222/in_sign_icon */}
                                <Link to="/signin" className="nav-link"><img src={signin} alt="" width="16px"/> Sign In</Link>
                            </li>
                            <li className="nav-item mr-auto">
                                {/* https://www.iconfinder.com/icons/296566/bulleted_bulleted_list_bullets_business_catalogue_checklist_directory_document_documents_file_files_form_index_instructions_inventory_list_log_order_ordered_ordered_list_page_paper_rank_record_register_sheet_shopping_sort_text_icon */}
                                <Link to="/signup" className="nav-link"><img src={signup} alt="" width="16px"/> Sign Up</Link>
                            </li>
                            <li className="nav-item mr-auto">
                                {/* https://www.iconfinder.com/icons/326663/language_web_icon */}
                                <Link to="/help" className="nav-link"><img src={language} alt="" width="16px"/> Language</Link>
                            </li>
                        </ul>

                    </div>
                </nav>
            )
        } else {
            // modified from https://getbootstrap.com/docs/4.0/components/navbar/
            return (

                <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top pt-0 pb-0">

                    {/* J'ai oublier de prendre en note le lien de ce logo, cependant je l'ai editer moi meme donc ces peut etre "Fair use" */}
                    <Link to="/" className="navbar-brand"><img src={logo} alt="" width="48px"/>uClub</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto"> {/* Left side of the nav bar */}
                            <li className="nav-item">
                                {/* https://www.iconfinder.com/icons/126572/home_house_icon */}
                                <Link to="/myclubs" className="nav-link"><img src={myclubs} alt="" width="16px"/> My Clubs</Link>
                            </li>
                            <li className="nav-item">
                                {/* https://www.iconfinder.com/icons/326713/calendar_date_today_icon */}
                                <Link to="/calendar" className="nav-link"><img src={calendar} alt="" width="16px"/> Calendar</Link>
                            </li>
                            <li className="nav-item">
                                {/* https://www.iconfinder.com/icons/298865/search_icon */}
                                <Link to="/clubs" className="nav-link"><img src={search} alt="" width="16px"/> Find a Club</Link>
                            </li>
                        </ul>

                        <ul className="navbar-nav"> {/* Right side of the nav bar */}
                            <li className="nav-item mr-auto">
                                {/* https://www.iconfinder.com/icons/995789/comment_communication_message_messages_icon */}
                                <Link to="/messages" className="nav-link"><img src={messages} alt="" width="16px"/> Messages</Link>
                            </li>
                            <li className="nav-item mr-auto">
                                {/* https://www.iconfinder.com/icons/5925671/avatar_profile_user_icon */}
                                <Link to="/profile" className="nav-link"><img src={profile} alt="" width="16px"/> My Profile</Link>
                            </li>
                            <li className="nav-item mr-auto">
                                {/* https://www.iconfinder.com/icons/383221/out_sign_icon */}
                                <Link to="/signout" className="nav-link" onClick={() => { this.props.userSignOut() }}><img src={signout} alt="" width="16px"/> Sign Out</Link>
                            </li>
                            <li className="nav-item mr-auto">
                                {/* https://www.iconfinder.com/icons/326663/language_web_icon */}
                                <Link to="/help" className="nav-link"><img src={language} alt="" width="16px"/> Language</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            )
        }
    }
}

export default Navigation;
