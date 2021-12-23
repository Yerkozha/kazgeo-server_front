import Download from '../../assets/image/icon/download.png'
import CloseSmall from '../../assets/image/icon/close.svg'
import Search from '../../assets/image/icon/uploadFileSearch.svg'
import Hamburger from '../../assets/image/icon/hamburger.svg'
import './CreateInternalDocument.scss'
import {Row, Col} from "antd";
import { LayoutMail } from '../../components/layout/LayoutMail'

export const CreateInternalDocument = (props: any) => {
  return (
    <LayoutMail>
      <div className="CreateInternalDocument__wrapper">
        <div className="CreateInternalDocument__header">
          <div className="CreateInternalDocument__header__buttons">
            <button className="CreateInternalDocument__header__save">Сохранить</button>
            <button className="CreateInternalDocument__header__cancel">Отмена</button>
          </div>
          <div className="CreateInternalDocument__header__search">
            <input type="text" placeholder="Найти" />
            <button className="settings"></button>
          </div>
        </div>
        <Row>
          <Col span={24}>
            <div className="CreateInternalDocument__block">
              <h1 className='CreateInternalDocument__title'>ЗАЯВКА В ЮД № ОТ</h1>
              <div className="CreateInternalDocument__toggleBtns">
                <button className="CreateInternalDocument__toggleBtn active">1</button>
                <button className="CreateInternalDocument__toggleBtn">2</button>
                <button className="CreateInternalDocument__toggleBtn">3</button>
                <button className="CreateInternalDocument__toggleBtn">4</button>
                <button className="CreateInternalDocument__toggleBtn">5</button>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            <div className="CreateInternalDocument__block">
              <h1 className='CreateInternalDocument__title'>Регистрационные реквизиты</h1>
              <div>
                <div className='CreateInternalDocument__label'>Основание для заключения договора:*</div>
                <div className="CreateInternalDocument__select select">
                  <div className="input__block">
                      <div className="input">Выберите</div>
                  </div>
                  <div className="options">
                      <div className="option">nnnn</div>
                      <div className="option">nnnn</div>
                      <div className="option">nnnn</div>
                      <div className="option">nnnn</div>
                  </div>
                </div>
              </div>

              <div>
                <div className='CreateInternalDocument__label'>Предмет договора (о чем):</div>
                <div className="CreateInternalDocument__select select">
                  <div className="input__block">
                      <div className="input">Административно-хозяйственное, материально-техническое обеспечение </div>
                  </div>
                  <div className="options">
                      <div className="option">nnnn</div>
                      <div className="option">nnnn</div>
                      <div className="option">nnnn</div>
                      <div className="option">nnnn</div>
                  </div>
                </div>
              </div>

              <div>
                <div className='CreateInternalDocument__label'>Объем оказываемых услуг/выполнения работ/закупаемого товара:*(количество, наименование, при приобретении товара единицу измерения)</div>
                <div className="CreateInternalDocument__select select">
                  <div className="input__block">
                      <div className="input">Выберите индекс</div>
                  </div>
                  <div className="options">
                      <div className="option">nnnn</div>
                      <div className="option">nnnn</div>
                      <div className="option">nnnn</div>
                      <div className="option">nnnn</div>
                  </div>
                </div>
              </div>

              <div>
                <div className='CreateInternalDocument__label'>Общая сумма Договора с учетом НДС/ИПН:* (при оплате нерезиденту указывается также размер взимаемого налога)</div>
                <div className="CreateInternalDocument__select select">
                  <div className="input__block">
                      <div className="input">Выберите индекс</div>
                  </div>
                  <div className="options">
                      <div className="option">nnnn</div>
                      <div className="option">nnnn</div>
                      <div className="option">nnnn</div>
                      <div className="option">nnnn</div>
                  </div>
                </div>
              </div>

              <div>
                <div className='CreateInternalDocument__label'>Стоимость услуг/работ:*(указывается при ежемесячной оплате)</div>
                <div className="CreateInternalDocument__select select">
                  <div className="input__block">
                      <div className="input">Выберите индекс</div>
                  </div>
                  <div className="options">
                      <div className="option">nnnn</div>
                      <div className="option">nnnn</div>
                      <div className="option">nnnn</div>
                      <div className="option">nnnn</div>
                  </div>
                </div>
              </div>

              <div>
                <div className='CreateInternalDocument__label'>Стоимость товара:(указывается в случае поставки приобретения две и более единицы товара)</div>
                <div className="CreateInternalDocument__select select">
                  <div className="input__block">
                      <div className="input">Выберите индекс</div>
                  </div>
                  <div className="options">
                      <div className="option">nnnn</div>
                      <div className="option">nnnn</div>
                      <div className="option">nnnn</div>
                      <div className="option">nnnn</div>
                  </div>
                </div>
              </div>


              <div>
                <div className='CreateInternalDocument__label'>Условия оплаты/форма завершения:*</div>
                <div className="CreateInternalDocument__select select">
                  <div className="input__block">
                      <div className="input">Выберите индекс</div>
                  </div>
                  <div className="options">
                      <div className="option">nnnn</div>
                      <div className="option">nnnn</div>
                      <div className="option">nnnn</div>
                      <div className="option">nnnn</div>
                  </div>
                </div>
              </div>

              <div>
                <div className='CreateInternalDocument__label'>Сроки оказания услуг/выполнения работ/поставки товара:*(указывается количество календарных/рабочих дней)</div>
                <div className="CreateInternalDocument__select select">
                  <div className="input__block">
                      <div className="input">Выберите индекс</div>
                  </div>
                  <div className="options">
                      <div className="option">nnnn</div>
                      <div className="option">nnnn</div>
                      <div className="option">nnnn</div>
                      <div className="option">nnnn</div>
                  </div>
                </div>
              </div>

              <div>
                <div className='CreateInternalDocument__label'>Место оказания услуг/выполнения работ/поставки товара:*</div>
                <div className="CreateInternalDocument__select select">
                  <div className="input__block">
                      <div className="input">Выберите индекс</div>
                  </div>
                  <div className="options">
                      <div className="option">nnnn</div>
                      <div className="option">nnnn</div>
                      <div className="option">nnnn</div>
                      <div className="option">nnnn</div>
                  </div>
                </div>
              </div>

              <div>
                <div className='CreateInternalDocument__label'>Требования к услугам/работам/товару:*(техническая спецификация)</div>
                <div className="CreateInternalDocument__select select">
                  <div className="input__block">
                      <div className="input">Выберите индекс</div>
                  </div>
                  <div className="options">
                      <div className="option">nnnn</div>
                      <div className="option">nnnn</div>
                      <div className="option">nnnn</div>
                      <div className="option">nnnn</div>
                  </div>
                </div>
              </div>

              <div>
                <div className='CreateInternalDocument__label'>Перечень документов требующихся для оплаты товара/работ/услуг:* (счет-фактура, инвойс, акты, накладная)</div>
                <div className="CreateInternalDocument__select select">
                  <div className="input__block">
                      <div className="input">Выберите индекс</div>
                  </div>
                  <div className="options">
                      <div className="option">nnnn</div>
                      <div className="option">nnnn</div>
                      <div className="option">nnnn</div>
                      <div className="option">nnnn</div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col span={12}>
            <div className="CreateInternalDocument__block">
              <h1 className='CreateInternalDocument__title'>РЕКВИЗИТЫ контрагента</h1>
              <div>
                <div className='CreateInternalDocument__label'>Автор:</div>
                <div className="author">
                  <input className="CreateInternalDocument__input" type="text" value="Исабеков Н.Д. (Руководитель Службы внутреннего аудита"/>
                  <span></span>
                </div>
                
              </div>

              <div>
                <div className='CreateInternalDocument__label'>ИИН/БИН:<span>*</span></div>
                <input className="CreateInternalDocument__input" type="text" placeholder='Введите'/>
              </div>

              <div>
                <div className='CreateInternalDocument__label'>Адрес:<span>*</span></div>
                <input className="CreateInternalDocument__input" type="text" placeholder='Введите'/>
              </div>

              <div>
                <div className='CreateInternalDocument__label'>ИИК:<span>*</span></div>
                <input className="CreateInternalDocument__input" type="text" placeholder='Введите'/>
              </div>

              
              <div>
                <div className='CreateInternalDocument__label'>БИК:<span>*</span></div>
                <input className="CreateInternalDocument__input" type="text" placeholder='Введите'/>
              </div>

              
              <div>
                <div className='CreateInternalDocument__label'>Банк:<span>*</span></div>
                <input className="CreateInternalDocument__input" type="text" placeholder='Введите'/>
              </div>

              
              <div>
                <div className='CreateInternalDocument__label'>Конт.телефон:<span>*</span></div>
                <input className="CreateInternalDocument__input" type="text" placeholder='Введите'/>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <div className="CreateInternalDocument__block documentRoute">
              <h1 className='CreateInternalDocument__title'>Маршрут документа</h1>
              <div>
                <div className='CreateInternalDocument__label'>Наименование контрагента:*</div>
                <div className="human">
                  <input className="CreateInternalDocument__input" type="text" value="Исабеков Н.Д."/>
                  <span></span>
                </div>
              </div>
              <div>
                <div className='CreateInternalDocument__label'>Субъект договора/соглашения:<span>*</span></div>
                <div className="CreateInternalDocument__select select">
                  <div className="input__block">
                      <div className="input">Не выбрано</div>
                  </div>
                  <div className="options">
                      <div className="option">nnnn</div>
                      <div className="option">nnnn</div>
                      <div className="option">nnnn</div>
                      <div className="option">nnnn</div>
                  </div>
                </div>
              </div>

              <div>
                <div className='CreateInternalDocument__label'>Признак резидентства контрагента:<span>*</span></div>
                <div className="CreateInternalDocument__select select">
                  <div className="input__block">
                      <div className="input">Не выбрано</div>
                  </div>
                  <div className="options">
                      <div className="option">nnnn</div>
                      <div className="option">nnnn</div>
                      <div className="option">nnnn</div>
                      <div className="option">nnnn</div>
                  </div>
                </div>
              </div>

              <div>
                <div className='CreateInternalDocument__label'>Статус налогоплательщика контрагента:<span>*</span></div>
                <div className="CreateInternalDocument__select select">
                  <div className="input__block">
                      <div className="input">Не выбрано</div>
                  </div>
                  <div className="options">
                      <div className="option">nnnn</div>
                      <div className="option">nnnn</div>
                      <div className="option">nnnn</div>
                      <div className="option">nnnn</div>
                  </div>
                </div>
              </div>

              <div>
                <div className='CreateInternalDocument__label'>Подписывающий со стороны контрагента:</div>
                <div className="human">
                  <input className="CreateInternalDocument__input" type="text"/>
                  <span></span>
                </div>
              </div>

              <div>
                <div className='CreateInternalDocument__label'>Реквизиты приказа о закупках, протокола, в рамках которого приобретаются товары/работы/услуги, служебная записка для заключения Договора:*</div>
                <input className="CreateInternalDocument__input" type="text"/>
              </div>

              <div>
                <div className='CreateInternalDocument__label'>Реквизиты банковского счета АО «Казгеология»:*(в зависимости от приобретения услуг/работ/товара в рамках выполнения государственного задания/ ФЭО/ исполнения сделок, в которых АО «Казгеология» является членом консорциума/соисполнителем/субподрядчиком)</div>
                <input className="CreateInternalDocument__input" type="text"/>
              </div>

              <div>
                <div className='CreateInternalDocument__label'>Срок действия договора:(при необходимости указания завершении срока действия договора в следующем финансовом году)</div>
                <input className="CreateInternalDocument__input" type="text"/>
              </div>

              <div>
                <div className='CreateInternalDocument__label'>Примечание:(при необходимости может указываться требования к таре при приобретении товара/условия для поставки товара)</div>
                <input className="CreateInternalDocument__input" type="text"/>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <div className="CreateInternalDocument__block listDocuments">
              <h1 className='CreateInternalDocument__title'>Получатели</h1>
              <div>
                <div className='CreateInternalDocument__label'>Вложения:</div>
                <div className="uploadFile">
                  <button className='button'>
                    <img src={Download} alt="download" className='uploadFile__img' />
                    <span>Загрузить</span>
                  </button>
                  <div className="uploadFile__input">
                    <button className="hamburger">
                      <img src={Hamburger} alt="" />
                    </button>
                    <input className="CreateInternalDocument__input" type="text"/>
                    <div className='uploadFile__btns'>
                      <button>
                        <img src={CloseSmall} alt="" />
                      </button>
                      <button>
                        <img src={Search} alt="" />
                      </button>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <div className="CreateInternalDocument__block">
              <h1 className='CreateInternalDocument__title'>Получатели</h1>
              <div>
                <div className='CreateInternalDocument__label'>Подписывающий:</div>
                <div className="human">
                  <input className="CreateInternalDocument__input" type="text" value="Исабеков Н.Д."/>
                  <span></span>
                </div>
                
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <div className="CreateInternalDocument__block">
              <div>
                <div className='CreateInternalDocument__label'>Основание для заключения договора:*</div>
                <input className="CreateInternalDocument__input" type="text"/>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </LayoutMail>
      
  )
}
