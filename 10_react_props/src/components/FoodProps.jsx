/* FoodProps.jsx */

export default function FoodProps(props) {
  return (
    <div>
      제가 좋아하는 음식은 <span className="color">{props.food}</span> 입니다
    </div>
  );
}

FoodProps.defaultProps = {
  food: "치킨",
};