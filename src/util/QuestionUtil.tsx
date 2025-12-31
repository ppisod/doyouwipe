import supabase from "../lib/supabase.ts";
import QuestionData from "../data/QuestionData.tsx";

class QuestionUtil {
    static async fetchTodayQuestion() {
        const today = new Date().toISOString().split('T')[0]; // Format: YYYY-MM-DD

        const {data: qotd, error} = await supabase
            .from('qotd')
            .select('q')
            .eq('for', today)
            .single();

        if (error) {
            console.error('Error fetching question:', error);
        } else if (qotd) {
            return qotd.q as unknown as QuestionData;
        }
    }

    static async handleVote(optionText: string) {
        const today = new Date().toISOString().split('T')[0];

        const {error} = await supabase.rpc('increment_vote', {
            row_date: today,
            option_name: optionText
        });

        if (error) {
            console.error('Error updating votes:', error);
        } else {
            console.log('Vote recorded!');
        }
    }
}

export default QuestionUtil