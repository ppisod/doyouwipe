import { useEffect, useState } from 'react'
import './App.css'
import Title from "../../comp/text/Title.tsx";
import ButtonContainer from "../../comp/button/ButtonContainer.tsx";
import Button from "../../comp/button/Button.tsx";
import TitleSub from "../../comp/text/TitleSub.tsx";
import TopBar from "../../comp/topbar/TopBar.tsx";
import TopBarContents from "../../comp/topbar/TopBarContents.tsx";
import QuestionData from "../../data/QuestionData.tsx";
import supabase from "../../lib/supabase.ts";

function App() {
  const [data, setData] = useState<QuestionData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchTodayQuestion() {
      const today = new Date().toISOString().split('T')[0]; // Format: YYYY-MM-DD
      
      const { data: qotd, error } = await supabase
        .from('qotd')
        .select('q')
        .eq('for', today)
        .single();

      if (error) {
        console.error('Error fetching question:', error);
      } else if (qotd) {
        setData(qotd.q as unknown as QuestionData);
      }
      setLoading(false);
    }

    fetchTodayQuestion();
  }, []);

  async function handleVote(optionText: string) {
    const today = new Date().toISOString().split('T')[0];
    
    const { error } = await supabase.rpc('increment_vote', {
      row_date: today,
      option_name: optionText
    });

    if (error) {
      console.error('Error updating votes:', error);
    } else {
      console.log('Vote recorded!');
    }
  }

  if (loading) return <div style={{textAlign: 'center', marginTop: '20px'}}>Loading...</div>;

  return (
      <>
        <TopBar>
            <TopBarContents.link link="https://github.com/ppisod/doyouwipe" content="Github"/>
            <TopBarContents.link link="/abt" content="About"/>
        </TopBar>
          <hr/>
          <Title/>
          <hr/>
          {data ? (
            <>
              <TitleSub content={data.q} />
              <ButtonContainer>
                {data.a.map((option, index) => (
                  <div key={index} onClick={() => handleVote(option.text)}>
                    <Button 
                      col={option.color} 
                      content={option.text} 
                    />
                  </div>
                ))}
              </ButtonContainer>
            </>
          ) : (
            <TitleSub content="No question for today." />
          )}
      </>
  )
}

export default App
