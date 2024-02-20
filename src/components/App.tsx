import Container from "./layout/Container";
import HashtagList from "./hashtag/HashtagList";
import { useFeedbackItemsStore } from "../stores/feedbackItemsStore";
import { useEffect } from "react";

function App() {
  const fetchFeedbackItems = useFeedbackItemsStore(
    (state) => state.fetchFeedbackItems
  );

  useEffect(() => {
    fetchFeedbackItems();
  }, [fetchFeedbackItems]);

  return (
    <div className="app">
      <Container />

      <HashtagList />
    </div>
  );
}

export default App;
