## Входящие и исходящие данные

```javascript
{
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
}
```