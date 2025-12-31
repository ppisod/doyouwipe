import { useEffect, useState } from 'react'
import './App.css'
import '../../index.css'
import Title from "../../comp/text/Title.tsx";
import ButtonContainer from "../../comp/button/ButtonContainer.tsx";
import Button from "../../comp/button/Button.tsx";
import TitleSub from "../../comp/text/TitleSub.tsx";
import TopBar from "../../comp/topbar/TopBar.tsx";
import TopBarContents from "../../comp/topbar/TopBarContents.tsx";
import QuestionData from "../../data/QuestionData.tsx";
import QuestionUtil from "../../util/QuestionUtil.tsx";

function App() {
    const [data, setData] = useState<QuestionData | null>(null);
    const [loading, setLoading] = useState(true);

        useEffect(() => {
            QuestionUtil.fetchTodayQuestion().then((qdata) => {
                if (qdata == undefined) {
                    console.warn("question data is undefined.");
                    return;
                }
                setData(qdata);
                setLoading(false);
            });
        }, []);

    if (loading) return <div style={{textAlign: 'center', marginTop: '20px'}}>Loading...</div>;

    let displayableSegment = (<> </>);
    if (data) {
        displayableSegment = (
            <>
            <TitleSub content={data.q}/>
            <ButtonContainer>
                {
                    data.a.map((option, index) => (
                        <div key={index} onClick={() => QuestionUtil.handleVote(option.text)}>
                            <Button col={option.color} content={option.text}/>
                        </div>
                    ))
                }
            </ButtonContainer>
            </>
        )
    } else {
        displayableSegment = (
            <TitleSub content="No question for today." />
        )
    }

    return (
        <>
          <TopBar>
              <TopBarContents.link link="https://github.com/ppisod/doyouwipe" content="Github"/>
              <TopBarContents.link link="/abt" content="About"/>
          </TopBar>
            <hr/>
            <Title/>
            <hr/>
            {displayableSegment}
        </>
    )
}

export default App
