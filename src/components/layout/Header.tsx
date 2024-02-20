import { useFeedbackItemsStore } from "../../stores/feedbackItemsStore";
import FeedbackForm from "../feedback/FeedbackForm";
import PageHeading from "../PageHeading";

export default function Header() {
  const addItemToList = useFeedbackItemsStore((state) => state.addItemToList);

  return (
    <header>
      <PageHeading />
      <FeedbackForm onAddToList={addItemToList} />
    </header>
  );
}
