import TopBar from "../../comp/topbar/TopBar.tsx";
import TopBarContents from "../../comp/topbar/TopBarContents.tsx";
import Body from "../../comp/text/Body.tsx";

function About() {
    return (
        <>
            <TopBar>
                <TopBarContents.link link="/" content="Home"/>
            </TopBar>
            <hr/>
            <Body content="This is a simple website home to a poll, where everyone can vote. The result will be shown the next day."/>
            <Body content="It is completely anonymous, so you can't be tracked. I think."/>
            <Body content="Made with ♡ by ppisod"/>
        </>
    )
}

export default About;