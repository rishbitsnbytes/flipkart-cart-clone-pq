import "./cart.css";
import { CartProductCard } from "./CartProductCard";

const SaveForLater = ({ saveForLaterItems }) => {
  console.log("log", saveForLaterItems);
  return (
    <div>
      {saveForLaterItems.length === 0 ? null : (
        <div className="flex-col flex-jutify-center flex-align-start gap-3">
          <h1 className="align-self-center">{`Save For Later - ${saveForLaterItems.length} item(s) `}</h1>
          <div className="flex-col flex-align-center flex-justify-center w-50-pc gap-2">
            {saveForLaterItems.map((item) => (
              <CartProductCard saveForLaterCard product={item} />
            ))}
          </div>{" "}
        </div>
      )}
    </div>
  );
};

export { SaveForLater };
