import PeopleIcon from "./icons/people";

const ServingDisplay = ({ servings, ...props }: { servings: number }) => {
  const isServingFractional = servings % 1 !== 0;
  return (
    <div className="flex justify-center items-center">
      {isServingFractional || servings > 3 ? (
        <>
          <p
            className="font-semibold"
            style={{
              fontSize: isServingFractional ? "0.8rem" : "1rem",
            }}
          >
            {servings} &times;
          </p>{" "}
          <PeopleIcon className="h-4 w-4" />
        </>
      ) : (
        [...Array(servings)].map((_, index) => (
          <PeopleIcon key={index} className="h-4 w-4" />
        ))
      )}
    </div>
  );
};
export default ServingDisplay;
