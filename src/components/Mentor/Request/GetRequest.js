
import React, { Component, useContext } from "react";
import { Link, NavLink } from 'react-router-dom'
import Modal from "../../Modal";



export default class GetRequest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            isClicked: true,
        }
        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
    }
    showModal = () => {
        this.setState({ 
            show: true, 
            isClicked: true,
        });
    };

    hideModal = () => {
        this.setState({ show: false });
    };

    handleClick = () => {
        this.setState({
            isClicked: true,
        })
    }

    callbackHandlerFunction = (clickStatus) => {
        this.setState({
            isClicked: clickStatus,
        });
    }

    render() {


        console.log(this.props)

        return (

            <tbody className="text-left h-16 ">
                <tr className="h-16 border-b-2 border-gray-200 ">
                    <td className="pl-8">  {this.props.no}</td>
                    <td>{this.props.nameStudent}</td>
                    <td className="">{this.props.nameSubject}</td>
                    <td className="">{this.props.time}</td>
                    <td className="">{this.props.date}</td>
                    <td className="  ">
                        <Modal  show={this.state.show} handleClose={this.hideModal} className="mb-5">
                        <div className="clear-both mb-5">
                <h2 className="text-center text-4xl font-bold text-black mb-4"> Request detail</h2>
                <div className=" m- h-5/6 w-5/6 mx-14 text-black  text-3xl">
                    <p className=" font-bold pb-2">Id: <a className="font-normal">{this.props.id}</a> </p>
                    <p className=" font-bold pb-2">Name: <a className="font-normal " >{this.props.nameStudent}</a>  </p>
                    <p className=" font-bold pb-2">Specialized: <a className="font-normal " >{this.props.specializedStudent}</a>  </p>
                    <p className=" font-bold pb-2">Subject: <a className="font-normal " >{this.props.nameSubject}</a>  </p>
                    <p className=" font-bold pb-2">Date: <a className="font-normal " >{this.props.date}</a>  </p>
                    <p className=" font-bold pb-2">Time: <a className="font-normal " >{this.props.time}</a>  </p>
                    <p className=" font-bold pb-2">Individual of group: <a className="font-normal " >{this.props.group}</a>  </p>
                    <p className=" font-bold pb-2">Question: <a className="font-normal " >{this.props.question}</a>  </p>
                    <div className="text-center">
                    <button className="h-12 w-32 m-4 bg-red-700 border-2">Accept</button>
                    <button className="h-12 w-32 m-4 bg-red-700 border-2">Cancel</button>
                    </div>

                </div>
            </div>

                        </Modal>
                        <button  type="button" className="font-bold" onClick={this.showModal}>
                            Edit
                        </button>
                    </td>
                   
                </tr>



            </tbody>

        );
    }
}
