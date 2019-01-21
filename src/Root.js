import React, { Component } from 'react';
import Zoom from '@material-ui/core/Zoom';
import Settings from '@material-ui/icons/Menu';
import Launch from '@material-ui/icons/Launch';


class Root extends Component {

  //состояния
  state = {
    page: 1,
    menu: true,
    zoom: false,
    calcUrl: "/",
    saveUrl: "/",
    saveModelUrl: "/",
    method: "POST",
    animate: true,
    input: [
      {
        cols: [
          {
            type: "textLarge",
            value: "Драйверы доходов",
            textAlign: "left",
            width: "50%"
          },
          {
            type: "textLarge",
            value: "1 квартал 2019",
            textAlign: "right",
            width: "12.5%"
          },
          {
            type: "textLarge",
            value: "2 квартал 2019",
            textAlign: "right",
            width: "12.5%"
          },
          {
            type: "textLarge",
            value: "3 квартал 2019",
            textAlign: "right",
            width: "12.5%"
          },
          {
            type: "textLarge",
            value: "4 квартал 2019",
            textAlign: "right",
            width: "12.5%"
          },
        ]
      },
      {
        cols: [
          {
            type: "text",
            value: "Количество сторонних объектов НДО, ед.",
            textAlign: "left",
            width: "50%"
          },
          {
            type: "input",
            value: 10,
            textAlign: "right",
            width: "12.5%"
          },
          {
            type: "input",
            value: 20,
            textAlign: "right",
            width: "12.5%"
          },
          {
            type: "input",
            value: 30,
            textAlign: "right",
            width: "12.5%"
          },
          {
            type: "input",
            value: 40,
            textAlign: "right",
            width: "12.5%"
          },
        ]
      },
      {
        cols: [
          {
            type: "text",
            value: "Количество услуг по обслуживанию сторонних объектов НДО, ед.",
            textAlign: "left",
            width: "50%"
          },
          {
            type: "input",
            value: 25,
            textAlign: "right",
            width: "12.5%"
          },
          {
            type: "input",
            value: 35,
            textAlign: "right",
            width: "12.5%"
          },
          {
            type: "input",
            value: 15,
            textAlign: "right",
            width: "12.5%"
          },
          {
            type: "input",
            value: 20,
            textAlign: "right",
            width: "12.5%"
          }
        ]
      },
      {
        cols: [
          {
            type: "text",
            value: "Среднее количество услуг по обслуживанию 1 стороннего объекта НДО, ед.",
            textAlign: "left",
            width: "50%"
          },
          {
            type: "input",
            value: 25,
            textAlign: "right",
            notEdit: true,
            width: "12.5%"
          },
          {
            type: "input",
            value: 35,
            textAlign: "right",
            notEdit: true,
            width: "12.5%"
          },
          {
            type: "input",
            value: 15,
            textAlign: "right",
            notEdit: true,
            width: "12.5%"
          },
          {
            type: "input",
            value: 20,
            textAlign: "right",
            notEdit: true,
            width: "12.5%"
          },
        ]
      },
      {
        cols: [
          {
            type: "text",
            value: "Средний комиссионный доход за оказание 1 услуги, тыс. руб.\n",
            textAlign: "left",
            width: "50%"
          },
          {
            type: "input",
            value: 35,
            textAlign: "right",
            width: "12.5%"
          },
          {
            type: "input",
            value: 15,
            textAlign: "right",
            width: "12.5%"
          },
          {
            type: "input",
            value: 20,
            textAlign: "right",
            width: "12.5%"
          },
          {
            type: "input",
            value: 17,
            textAlign: "right",
            width: "12.5%"
          }
        ]
      }
    ],
    output: [
      {
        cols: [
          {
            type: "textLarge",
            value: "Драйверы расходов",
            textAlign: "left",
            width: "50%"
          },
          {
            type: "textLarge",
            value: "",
            textAlign: "right",
            width: "12.5%"
          },
          {
            type: "textLarge",
            value: "",
            textAlign: "right",
            width: "12.5%"
          },
          {
            type: "textLarge",
            value: "",
            textAlign: "right",
            width: "12.5%"
          },
          {
            type: "textLarge",
            value: "",
            textAlign: "right",
            width: "12.5%"
          },
        ]
      },
      {
        cols: [
          {
            type: "text",
            value: "Пробег спецавтотранспорта (всего) за период, км",
            textAlign: "left",
            width: "50%"
          },
          {
            type: "input",
            value: 10,
            textAlign: "right",
            width: "12.5%"
          },
          {
            type: "input",
            value: 20,
            textAlign: "right",
            width: "12.5%"
          },
          {
            type: "input",
            value: 30,
            textAlign: "right",
            width: "12.5%"
          },
          {
            type: "input",
            value: 40,
            textAlign: "right",
            width: "12.5%"
          },
        ]
      },
      {
        cols: [
          {
            type: "text",
            value: "Средняя стоимость топлива на 1 км. пробега спецавтотранспорта (всего), руб.",
            textAlign: "left",
            width: "50%"
          },
          {
            type: "input",
            value: 25,
            textAlign: "right",
            width: "12.5%"
          },
          {
            type: "input",
            value: 35,
            textAlign: "right",
            width: "12.5%"
          },
          {
            type: "input",
            value: 15,
            textAlign: "right",
            width: "12.5%"
          },
          {
            type: "input",
            value: 20,
            textAlign: "right",
            width: "12.5%"
          }
        ]
      },
      {
        cols: [
          {
            type: "text",
            value: "Сумма расходов на содержание и обслуживание 1 ед. спецавтотранспорта, руб.",
            textAlign: "left",
            width: "50%"
          },
          {
            type: "input",
            value: 25,
            textAlign: "right",
            width: "12.5%"
          },
          {
            type: "input",
            value: 35,
            textAlign: "right",
            width: "12.5%"
          },
          {
            type: "input",
            value: 15,
            textAlign: "right",
            width: "12.5%"
          },
          {
            type: "input",
            value: 20,
            textAlign: "right",
            width: "12.5%"
          },
        ]
      },
      {
        cols: [
          {
            type: "text",
            value: "Норматив исполнения услуги, коэф.",
            textAlign: "left",
            width: "50%"
          },
          {
            type: "input",
            value: 35,
            textAlign: "right",
            width: "12.5%"
          },
          {
            type: "input",
            value: 15,
            textAlign: "right",
            width: "12.5%"
          },
          {
            type: "input",
            value: 20,
            textAlign: "right",
            width: "12.5%"
          },
          {
            type: "input",
            value: 17,
            textAlign: "right",
            width: "12.5%"
          }
        ]
      },
      {
        cols: [
          {
            type: "text",
            value: "Количество условных операций, ед.",
            textAlign: "left",
            width: "50%"
          },
          {
            type: "input",
            value: 10,
            textAlign: "right",
            notEdit: true,
            width: "12.5%"
          },
          {
            type: "input",
            value: 20,
            textAlign: "right",
            notEdit: true,
            width: "12.5%"
          },
          {
            type: "input",
            value: 30,
            textAlign: "right",
            notEdit: true,
            width: "12.5%"
          },
          {
            type: "input",
            value: 40,
            textAlign: "right",
            notEdit: true,
            width: "12.5%"
          },
        ]
      },
      {
        cols: [
          {
            type: "text",
            value: "Норма выработки условных операций на 1 ПШЕ, ед. на ПШЕ",
            textAlign: "left",
            width: "50%"
          },
          {
            type: "input",
            value: 25,
            textAlign: "right",
            width: "12.5%"
          },
          {
            type: "input",
            value: 35,
            textAlign: "right",
            width: "12.5%"
          },
          {
            type: "input",
            value: 15,
            textAlign: "right",
            width: "12.5%"
          },
          {
            type: "input",
            value: 20,
            textAlign: "right",
            width: "12.5%"
          }
        ]
      },
      {
        cols: [
          {
            type: "text",
            value: "Нормативная численность, ПШЕ",
            textAlign: "left",
            width: "50%"
          },
          {
            type: "input",
            value: 25,
            textAlign: "right",
            notEdit: true,
            width: "12.5%"
          },
          {
            type: "input",
            value: 35,
            textAlign: "right",
            notEdit: true,
            width: "12.5%"
          },
          {
            type: "input",
            value: 15,
            textAlign: "right",
            notEdit: true,
            width: "12.5%"
          },
          {
            type: "input",
            value: 20,
            textAlign: "right",
            notEdit: true,
            width: "12.5%"
          },
        ]
      },
      {
        cols: [
          {
            type: "text",
            value: "Норматив бригадности, коэф.",
            textAlign: "left",
            width: "50%"
          },
          {
            type: "input",
            value: 35,
            textAlign: "right",
            width: "12.5%"
          },
          {
            type: "input",
            value: 15,
            textAlign: "right",
            width: "12.5%"
          },
          {
            type: "input",
            value: 20,
            textAlign: "right",
            width: "12.5%"
          },
          {
            type: "input",
            value: 17,
            textAlign: "right",
            width: "12.5%"
          }
        ]
      },
      {
        cols: [
          {
            type: "text",
            value: "Норматив резервирования спецавтотранспорта, коэф.",
            textAlign: "left",
            width: "50%"
          },
          {
            type: "input",
            value: 10,
            textAlign: "right",
            notEdit: true,
            width: "12.5%"
          },
          {
            type: "input",
            value: 20,
            textAlign: "right",
            notEdit: true,
            width: "12.5%"
          },
          {
            type: "input",
            value: 30,
            textAlign: "right",
            notEdit: true,
            width: "12.5%"
          },
          {
            type: "input",
            value: 40,
            textAlign: "right",
            notEdit: true,
            width: "12.5%"
          },
        ]
      },
      {
        cols: [
          {
            type: "text",
            value: "Количество спецавтотранспорта, ед.",
            textAlign: "left",
            width: "50%"
          },
          {
            type: "input",
            value: 25,
            textAlign: "right",
            notEdit: true,
            width: "12.5%"
          },
          {
            type: "input",
            value: 35,
            textAlign: "right",
            notEdit: true,
            width: "12.5%"
          },
          {
            type: "input",
            value: 15,
            textAlign: "right",
            notEdit: true,
            width: "12.5%"
          },
          {
            type: "input",
            value: 20,
            textAlign: "right",
            notEdit: true,
            width: "12.5%"
          }
        ]
      },
      {
        cols: [
          {
            type: "text",
            value: "Средний оклад, руб.",
            textAlign: "left",
            width: "50%"
          },
          {
            type: "input",
            value: 25,
            textAlign: "right",
            width: "12.5%"
          },
          {
            type: "input",
            value: 35,
            textAlign: "right",
            width: "12.5%"
          },
          {
            type: "input",
            value: 15,
            textAlign: "right",
            width: "12.5%"
          },
          {
            type: "input",
            value: 20,
            textAlign: "right",
            width: "12.5%"
          },
        ]
      }
    ],
    bottomValues: [
      {
        large: true,
        cols: [
          {
            value: ""
          },
          {
            value: "1 квартал 2019"
          },
          {
            value: "2 квартал 2019"
          },
          {
            value: "3 квартал 2019"
          },
          {
            value: "4 квартал 2019"
          },
          {
            value: "2019 год"
          },
        ],
      },
      {
        large: true,
        cols: [
          {
            value: "Финансовый результат, млн. руб."
          },
          {
            value: "61,34"
          },
          {
            value: "96,95"
          },
          {
            value: "61,34"
          },
          {
            value: "96,95"
          },
          {
            value: "96,95"
          },
        ],
        children: [
          {
            large: true,
            cols: [
              {
                value: "Доходы, млн. руб."
              },
              {
                value: "61,34"
              },
              {
                value: "96,95"
              },
              {
                value: "61,34"
              },
              {
                value: "96,95"
              },
              {
                value: "96,95"
              },
            ],
            children: [
              {
                cols: [
                  {
                    value: "Комиссионный доход, млн. руб."
                  },
                  {
                    value: "61,34"
                  },
                  {
                    value: "96,95"
                  },
                  {
                    value: "61,34"
                  },
                  {
                    value: "96,95"
                  },
                  {
                    value: "96,95"
                  },
                ]
              }
            ]
          },
          {
            large: true,
            cols: [
              {
                value: "Прямые расходы, млн. руб."
              },
              {
                value: "61,34"
              },
              {
                value: "96,95"
              },
              {
                value: "61,34"
              },
              {
                value: "96,95"
              },
              {
                value: "96,95"
              },
            ],
            children: [
              {
                cols: [
                  {
                    value: "Расходы на персонал, млн. руб."
                  },
                  {
                    value: "61,34"
                  },
                  {
                    value: "96,95"
                  },
                  {
                    value: "61,34"
                  },
                  {
                    value: "96,95"
                  },
                  {
                    value: "96,95"
                  },
                ]
              },
              {
                cols: [
                  {
                    value: "Бизнес-расходы, млн. руб."
                  },
                  {
                    value: "61,34"
                  },
                  {
                    value: "96,95"
                  },
                  {
                    value: "61,34"
                  },
                  {
                    value: "96,95"
                  },
                  {
                    value: "96,95"
                  },
                ],
                children: [
                  {
                    cols: [
                      {
                        value: "Расходы на ГСМ спецавтотранспорта, млн. руб."
                      },
                      {
                        value: "61,34"
                      },
                      {
                        value: "96,95"
                      },
                      {
                        value: "61,34"
                      },
                      {
                        value: "96,95"
                      },
                      {
                        value: "96,95"
                      },
                    ]
                  },
                  {
                    cols: [
                      {
                        value: "Расходы на содержание и обслуживание спецавтотранспорта, млн. руб."
                      },
                      {
                        value: "61,34"
                      },
                      {
                        value: "96,95"
                      },
                      {
                        value: "61,34"
                      },
                      {
                        value: "96,95"
                      },
                      {
                        value: "96,95"
                      },
                    ]
                  },
                ]
              },
            ]
          }
        ]
      }
    ]
  };

  //При отрисовке компонентов
  componentDidMount() {
    console.log("Объект схема для изменяемых значений:");
    console.log(this.state.input);
    console.log("-----------------------------");
    console.log("Объект схема для неизменяемых значений:");
    console.log(this.state.output);
  };

  //роутер страниц (неактивен)
  pageRouter = (index) => {
    this.setState({animate: false});
    setTimeout(() => {
      this.setState({page: index});
      this.setState({animate: true});
    }, 100);
  };

  //Калькулировать значения
  calculateResult = (inp, out, url) => {
    console.log("То что мы отправляем на расчет:");
    console.log(JSON.stringify({
      input: inp,
      output: out
    }));

    const options = {
      method: this.state.method,
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        input: inp,
        output: out
      })
    };

    fetch(url, options)

      .then((response) => {
        if(response.status === 200) {
          try {
            const array = response.json();
            this.setState({
              input: array.input,
              output: array.output,
              bottomValues: array.bottomValues
            })
          }catch (e) {
            console.log("Без данных...");
          }
        }
      })
      .catch( alert );
  };

  //Функция изменения состояния полей основной таблицы драйверов
  handleChange = (e, arr, parent, children, name) => {

    const val = e.target.value;

    arr[parent].cols[children].value = val;

    this.setState({[name] : arr}, () => {
      console.log("Введенное значение");
      console.log(val);
      console.log("-------------------------");
      console.log("Измененный объект значения");
      console.log(this.state[name][parent].cols[children]);
      console.log("-------------------------");
      console.log("Измененный объект таблицы");
      console.log(this.state[name]);
    });
  };

  //Функция ортисовки основной таблицы драйверов
  tableGenerator = (array, name) => {
    return array.map((item, i) => {
      return (
        <div key={i} className="tableRow">
          {
            item.cols.map((col, index) => {

              const id = `${name}_row-${i}__col-${index}`;

              return (
                <div key={index} className="tableCol" style={{width: col.width}}>
                  {
                    col.type === "text"
                      ? <div style={{textAlign: col.textAlign}} className="tableInnerText">
                          <span id={id}>{col.value}</span>
                        </div>
                      : null
                  }
                  {
                    col.type === "textLarge"
                      ? <div style={{textAlign: col.textAlign}} className="tableInner textLarge">
                          <span id={id}>{col.value}</span>
                        </div>
                      : null
                  }
                  {
                    col.type === "input"
                      ?
                      <input
                        style={{textAlign: col.textAlign}}
                        disabled={typeof col.notEdit !== "undefined" && col.notEdit === true ? "disabled" : ""}
                        onChange={(e) => this.handleChange(e, array, i, index, name)}
                        name={id} id={id}
                        className="input"
                        value={col.value}
                        type="text"
                      />
                      : null
                  }
                </div>
              )
            })
          }
        </div>
      )
    });
  };

  //Открыть/закрыть меню
  toggleDrawer = () => {
    this.setState({
      menu: !this.state.menu,
    });
  };

  //Функция изменения инпутов
  handleInput = (e, name) => {
    this.setState({[name] : e.target.value})
  };

  //функция отрисовки таблицы в нижнем блоке
  bottomTableGenerator = (data, idp) => {
    return data.map((item, i) => {
      return (
        <div key={i} className="rowWrap">
          <div className="valuesRow">
            {
              item.cols.map((col, index) => {
                return (
                  <div key={index} className={`valuesCol ${item.large === true ? "large" : ""}`} style={{paddingLeft: (idp * 5)}}>{col.value}</div>
                )
              })
            }
          </div>
          {
            typeof item.children !== "undefined" ? this.bottomTableGenerator(item.children, (idp + 1)) : null
          }
        </div>
      )
    });
  };

  //Отрисовка
  render() {
    return (
      <div className="Root">
        <div className="menu" onClick={() => this.toggleDrawer()}>
          <Settings style={this.state.menu === true ? {fill : "#26b075"} : {fill: "#505156"}} />
        </div>
        <div className="title">
          VDT. Модель операционного планирования ЦУНДО
        </div>
        <div className={`slide ${this.state.menu === true ? "active" : ""}`}>
          <div className="filters">
            <div className="filtersItem">
              <div className="filterTitle">Период</div>
              <div className="filterItem">2019</div>
            </div>
            <div className="filtersItem">
              <div className="filterTitle">Подразделение</div>
              <div className="filterItem">Поволжский банк</div>
            </div>
            <div className="filtersItem">
              <div className="filterTitle">Бизнес-Блок</div>
              <div className="filterItem">ЦУНДО</div>
            </div>
            <div className="filtersItem">
              <div className="filterTitle">Направление ЦУНДО</div>
              <div className="filterItem">Инкассаторское обслуживание</div>
            </div>
            <div className="buttonWrapper">
              <button onClick={() => this.calculateResult(this.state.input, this.state.output, this.state.calcUrl)} className="button_save_settings">Рассчитать</button>
              <button onClick={() => this.calculateResult(this.state.input, this.state.output, this.state.saveUrl)} className="button_save_settings">Сохранить</button>
              <button className="button_save_settings">Модель</button>
            </div>
          </div>
        </div>
        <div className={`frames ${this.state.menu === true ? "active" : ""} ${this.state.zoom === true ? "zoom" : ""}`}>
          <div className={`frame ${this.state.zoom === true ? "zoom" : ""}`}>
            <div className="zoomIcon" onClick={() => this.setState({zoom: !this.state.zoom})}>
              <Launch style={this.state.zoom === true ? {fill : "#26b075"} : {fill: "#505156"}} />
            </div>
            <div className="blockTitle">Драйверы</div>
            <Zoom in={this.state.animate}>
              <div className="page_1">
                <div className="table">
                  {
                    this.tableGenerator(this.state.input, "input")
                  }
                </div>
                <div className="table">
                  {
                    this.tableGenerator(this.state.output, "output")
                  }
                </div>
              </div>
            </Zoom>
          </div>
          <div className="bottomFrame">
            <div className="blockTitle">Показатели</div>
            <div className="valuesBlock">
              {this.bottomTableGenerator(this.state.bottomValues, 0)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Root;
