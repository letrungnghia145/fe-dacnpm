export const AccordionItem = (props) => {
  const { active, category, setCurrentCategoryShow } = props;
  const { name, id } = category;
  const showCategoryInfo = (event) => {
    event.preventDefault();
    active ? setCurrentCategoryShow(0) : setCurrentCategoryShow(id);
  };
  return (
    <div className="card">
      <div className="card-header" role="tab" id="headingOne">
        <h5 className="mb-0">
          <a href="" onClick = {(event)=>{showCategoryInfo(event)}}>{name}</a>
        </h5>
      </div>
      <div
        className={`collapse${active ? " show" : ""}`}
        data-parent="#accordion"
      >
        <div className="card-body text-left">
          <div></div>
        </div>
      </div>
    </div>
  );
};
