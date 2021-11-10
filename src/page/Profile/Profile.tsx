import {UserOutlined, PlusCircleOutlined} from "@ant-design/icons";
import {Row, Col, Avatar, Input, Button, message, Form, Card, Upload} from "antd";
import React from 'react';

type PropsType = {
    
    
}

const Profile:React.FC<PropsType> = (props) => {
    let formRef = React.createRef()
    return (
        <div className={"profilePage"}>
        <Row>
            <h1 style={{fontWeight: "bold", fontSize: "24px"}}>ПРОФИЛЬ</h1>
        </Row>
        <Row gutter={14} style={{marginBottom: "14px"}}>
            <Col span={8}>
                <Card className="card defaultBg">
                    <h3>Фотография пользователя</h3>
                </Card>
            </Col>
            <Col span={16}>
                <Card className="card defaultBg">
                    <h3 style={{float: "left"}}>Контактная информация</h3>
                    {true && <Button
                        
                        style={{border:'none',float:'right', marginRight:"10%" }}
                        onClick={() => {

                        }}
                    > <span style={{textDecoration:'underline', fontSize:'16px', marginLeft:'10px'}}>Редактировать</span> </Button>}
                </Card>
            </Col>
        </Row>
        <Row gutter={14}>
            <Col span={8}>
                <Card className="card2 defaultBg">
                    <Avatar style={{marginBottom: "30px"}} size={250} icon={<UserOutlined/>}
                            src="# " />
                    <Upload
                        listType="text"
                        
                    >  {
                        false ? null :
                            <Button className={"pl-0"} size="large"
                                    icon={<PlusCircleOutlined/>}
                                    type={"link"}>
                                Загрузить изображение
                            </Button>}</Upload>
                </Card>
            </Col>
            <Col span={16}>
                <Card className="card2 defaultBg">
                    <Form
                        //style={{marginLeft: '100px'}}
                        name="basic"
                    >
                        <Row gutter={14}>
                            <Col span={8}><span style={{float: "left"}}><h3>Фамилия</h3></span></Col>
                            <Col span={12} className={'text-left'}>
                                <Form.Item
                                    name='last_name'
                                >
                                    {true ?
                                        "Yerkozha" :

                                        <Input
                                            placeholder='Введите фамилию'
                                            size='large'
                                        />

                                    }
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={14}>

                            <Col span={8}><span style={{float: "left"}}> <h3>Имя </h3></span></Col>
                            <Col span={12} className={'text-left'}>
                                <Form.Item
                                    name='first_name'
                                >
                                    {true ? 'Yerkozha' :

                                        <Input
                                            placeholder='Введите имя'
                                            size='large'
                                        />

                                    }
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={14}>
                            <Col span={8}><span style={{float: "left"}}> <h3> Отчество </h3></span></Col>
                            <Col span={12} className={'text-left'}>
                                <Form.Item

                                    name='middle_name'
                                >
                                    {true ? "Temirbekovich" :

                                        <Input
                                            placeholder='Введите Отчество'

                                            value={"Temirbekovich"}
                                            size='large'
                                        />

                                    }
                                </Form.Item>
                            </Col>
                        </Row>
                        {/* <Row gutter={14}>
                            <Col span={8}><span style={{float: "left"}}><h3>Контактый Email</h3></span></Col>
                            <Col span={12} className={'text-left'}>
                                <Form.Item
                                    name='email'
                                >
                                    {this.state.edit ?
                                        this.state.email :

                                        <Input
                                            placeholder='Введите email'
                                            value={this.state.email}
                                            size='large'
                                        />

                                    }
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={14}>
                            <Col span={8}><span style={{float: "left"}}><h3>Контактый телефон</h3></span></Col>
                            <Col span={12} className={'text-left'}>
                                <Form.Item
                                    name='phone'
                                >
                                    {this.state.edit ?
                                        this.state.phone :

                                        <MaskedInput mask="+7 (111) 111 11 11"
                                                     placeholder='Введите номер'
                                                     value={this.state.phone}
                                                     size='large'
                                        />

                                    }
                                </Form.Item>
                            </Col>
                        </Row>

                        <Row gutter={14}>
                            <Col span={8}><span style={{float: "left"}}><h3>Должность</h3></span></Col>
                            <Col span={12} className={'text-left'}>
                                <Form.Item
                                    name='position_name'
                                >
                                    {this.state.edit ?
                                        this.state.position_name :

                                        <Input
                                            placeholder='Ваша должность в компании'
                                            value={this.state.position_name}
                                            size='large'
                                        />

                                    }
                                </Form.Item>
                            </Col>
                        </Row>

                        <Row gutter={14}>
                            <Col span={8}><span style={{float: "left"}}><h3>Компания</h3></span></Col>
                            <Col span={12} className={'text-left'}>
                                <Form.Item
                                    name='organization_name'
                                >
                                    {this.state.organization_name }
                                </Form.Item>
                            </Col>
                        </Row> */}




                        {true &&
                        <Row gutter={16}>
                            <Col span={5}>
                                <Form.Item>
                                    <Button
                                        size='large'
                                        type='primary'
                                        htmlType='submit'
                                    >Сохранить</Button>
                                </Form.Item>
                            </Col>
                            <Col>
                                <Button
                                    size='large'
                                    onClick={()=>{}}
                                >Отмена</Button>
                            </Col>
                        </Row>

                        }

                      
                    </Form>
                </Card>
            </Col>
        </Row>
    </div>
    )
}

export default Profile;
