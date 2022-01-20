import styled from "styled-components"
import { Avatar, Button, IconButton } from "@material-ui/core";
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ChatIcon from '@material-ui/icons/Chat';
import SearchIcon from '@material-ui/icons/Search';
import * as EmailValidator from "email-validator";
function Sidebar() {

const createChat = () =>{

    const input = prompt('Please enter email address to connect to your chat server ');

    if(!input) return null;

    if (EmailValidator.validate(input)){
        // we need to add input to chat db
    }
}
    return (
        <Container>
            <Header>
            <UserAvatar />
            <IconsContainer>
                <IconButton>
                 <ChatIcon /> 
                </IconButton>
                 <IconButton>
                <MoreVertIcon />
                </IconButton>
            </IconsContainer>

            
            </Header>
            <Search>
                <SearchIcon />
                <SearchInput placeholder="Search in Chats"/>
            </Search>
            <SidebarBotton onClick={createChat}> Start a new chat</SidebarBotton>
            {/* list of */}
        </Container>
    )
}

export default Sidebar;

const Container = styled.div`

`;

const SidebarBotton = styled(Button)`
width: 100%; 
&&& {
    border-top: 1px solid whitesmoke;
    border-bottom: 1px solid whitesmoke;
}

`;


const Search = styled.div`
display: flex;
align-items: center;
padding: 20px;
border-radius: 2px;
`;

const SearchInput = styled.input`
    outline-with: 0;
    border: none;
    flex: 1;
    `;

const Header = styled.div` 
 display: flex;
 position: sticky;
 top: 0;
 z-index : 1;
 background-color: #0000;
 justify-content: space-between;
 align-items: center;
 padding: 15px;
 height: 80px;
 border-bottom: 1px solid whitesmoke;
`;

const UserAvatar = styled(Avatar)`
   cursor: pointer;


   :hover {
       opacity: 0.8;
   }
`;

const IconsContainer = styled.div``;