import React from "react";

const Add_Advert = () => {
    return (
        <div>

    <div
    className="addAdvertDiv"
    style={{ width: "fit-content", margin: "0 auto", paddingTop: 30 }}
    >
  <label htmlFor="advertType" className="form-label">
    Тип объявление
  </label>
  <input
    className="form-control"
    list="advertTypeOptions"
    id="advertType"
    placeholder="Тип объявления"
  />
  <datalist id="advertTypeOptions">
    <option value="Потеряно животное"></option>
    <option value="Найдено животное"></option>
  </datalist>
  <div className="mb-3">
    <label htmlFor="exampleFormControlInput1" className="form-label">
      Животное, порода
    </label>
    <input
      type="text"
      className="form-control"
      id="exampleFormControlInput1"
      placeholder="Например 'собака хаски'"
      required=""
    />
  </div>
  <label htmlFor="chooseNeighbour" className="form-label">
    Район в котором нашли животное
  </label>
  <input
    className="form-control"
    list="NeighbourOptions"
    id="chooseNeighbour"
    placeholder="Введите район.."
  />
  <datalist id="NeighbourOptions">
    <option value="Приморский"></option>
    <option value="Центральный"></option>
    <option value="Кировский"></option>
    <option value="Выборгский"></option>
    <option value="Курортный"></option>
  </datalist>
  <div className="mb-3">
    <label htmlFor="dateInput" className="form-label">
      Дата, когда вы нашли / потеряли животное
    </label>
    <input type="date" className="form-control" id="dateInput" required="" />
  </div>
  <div className="mb-3">
    <label htmlFor="chipInput" className="form-label">
      {" "}
      Номер чипа (если есть)
    </label>
    <input type="text" className="form-control" id="chipInput" />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleFormControlTextarea1" className="form-label">
      Описание
    </label>
    <textarea
      className="form-control"
      id="exampleFormControlTextarea1"
      rows={3}
      defaultValue={""}
    />
  </div>
  <button type="submit" id="publicateAdvert" className="btn btn-primary">
    Опубликовать
  </button>
</div>


        </div>
    );
};

export default Add_Advert;