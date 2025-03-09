import React from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import Table from 'react-bootstrap/Table';
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import MainNavBar from '../components/MainNavBar'

const Loan = () => {

    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) { window.location.href = "/login" }

    const [loanRecords, setLoanRecords] = useState([])
    const [isLoading, setLoading] = useState(false);
    const [loanData, setLoanData] = useState({ email: "", bankName: "", accountNumber: "", amount: "", firstName: "", lastName: "" })

    useEffect(() => {
        const ID = user._id;
            const loadData = async ()=> {
                await axios.post("/loadData", {ID}).then((data)=>{
                    if(data.data.loanData){
                        setLoanRecords(data.data.loanData);
                        console.log(data.data)
                    }
                })
            }

            loadData();
    }, [])

    const applyLoan = async (e) => {
        e.preventDefault();
        setLoading(true)
        const { email, bankName, accountNumber, amount, firstName, lastName } = loanData
        const ID = user._id;
        await axios.post("/applyLoan", { email, bankName, accountNumber, amount, firstName, lastName, ID }).then((data) => {
            if (data.data.success) {
                toast.success(data.data.success)
                setLoading(false);
            } else if (data.data.error) {
                toast.error(data.data.error);
                setLoading(false);
                setLoanData({ email: "", bankName: "", accountNumber: "", amount: "", firstName: "", lastName: "" })
            }
        })
    }

    const testAlert = async () => {
        Swal.fire({
            position: "top-end",
            html: "<div class='test'><span class='text-sample'>Anita Cardoso</span> successfully withdraw £2,000 from FOREX Trader</div>",
            showConfirmButton: false,
            timer: 3200,
            customClass: {
                popup: "custom-swal-popup",
                title: "custom-swal-title",
                html: "html-custom"
            },
        });
        
    }

    return (
        <>
            <MainNavBar />
            <div className='container-fluid mt-5'>
                <div style={{ marginTop: "70px" }} className="card card-gradient">
                    <h3 className='text-center m-2'>Apply For Loan Now!</h3>
                    <img style={{ borderRadius: "5px", marginLeft: "7px" }} src="/img/credit.jpg" width={310} height={210} alt="" srcset="" />
                    <button onClick={testAlert}>Alert Now!</button>
                    <form onSubmit={applyLoan}>
                        <div className="form-text m-2">
                            Ensure all fields are completed accurately to avoid delays in processing.
                            <span className='text-warning m-1'>
                                Provide valid identification and required supporting documents.
                            </span>
                            Loan approval is subject to verification and credit assessment.
                        </div>
                        <div className="card-body">
                            <div className="input-group mb-3">
                                <span className="input-group-text bg-transparent" id="basic-addon1">@</span>
                                <input
                                    type="email"
                                    value={loanData.email}
                                    onChange={(e) => setLoanData({ ...loanData, email: e.target.value })}
                                    className="form-control bg-transparent"
                                    placeholder="email-address"
                                    aria-label="Username"
                                    aria-describedby="basic-addon1"
                                    required
                                />
                            </div>

                            <div className="input-group mb-3">
                                <input
                                    type="text"
                                    value={loanData.bankName}
                                    onChange={(e) => setLoanData({ ...loanData, bankName: e.target.value })}
                                    className="form-control bg-transparent"
                                    placeholder="Recipient's bank name"
                                    aria-label="Recipient's username"
                                    aria-describedby="basic-addon2"
                                    required
                                />
                                <span className="input-group-text bg-transparent" id="basic-addon2">@Bank name</span>
                            </div>

                            <label for="basic-url" className="form-label">Your vanity URL</label>
                            <div className="input-group mb-3">
                                <span className="input-group-text bg-transparent" id="basic-addon3">*Account Nummber*</span>
                                <input
                                    value={loanData.accountNumber}
                                    onChange={(e) => setLoanData({ ...loanData, accountNumber: e.target.value })}
                                    type="text"
                                    className="form-control bg-transparent"
                                    id="basic-url"
                                    aria-describedby="basic-addon3"
                                    required
                                />
                            </div>

                            <div className="input-group mb-3">
                                <span className="input-group-text bg-transparent">{user.currency}</span>
                                <select
                                    value={loanData.amount}
                                    onChange={(e) => setLoanData({ ...loanData, amount: e.target.value })}
                                    class="form-select bg-transparent"
                                    id="inputGroupSelect01"
                                    required
                                >
                                    <option selected>Choose...</option>
                                    <option value={user.currency + "2,000"}>{user.currency}1,000</option>
                                    <option value={user.currency + "5,000"}>{user.currency}5,000</option>
                                    <option value={user.currency + "10,000"}>{user.currency}10,000</option>
                                    <option value={user.currency + "15,000"}>{user.currency}15,000</option>
                                    <option value={user.currency + "20,000"}>{user.currency}20,000</option>
                                    <option value={user.currency + "25,000"}>{user.currency}25,000</option>
                                </select>
                                <span className="input-group-text bg-transparent">.00</span>
                            </div>

                            <div className="input-group mb-3">
                                <input
                                    value={loanData.firstName}
                                    onChange={(e) => setLoanData({ ...loanData, firstName: e.target.value })}
                                    type="text"
                                    className="form-control bg-transparent"
                                    placeholder="FirstName"
                                    aria-label="Username"
                                    required
                                />
                                <span className="input-group-text bg-transparent">@</span>
                                <input
                                    type="text"
                                    value={loanData.lastName}
                                    onChange={(e) => setLoanData({ ...loanData, lastName: e.target.value })}
                                    className="form-control bg-transparent"
                                    placeholder="LastName"
                                    aria-label="Server"
                                    required
                                />
                            </div>

                            <div className="input-group">
                                <span className="input-group-text bg-transparent">With textarea</span>
                                <textarea className="form-control bg-transparent" placeholder='Optional' aria-label="With textarea"></textarea>
                            </div>
                            <button
                                className='btn btn-primary w-100 mt-3'
                                type='submit'>
                                {isLoading ? "Loading..." : "Apply Now!"}
                            </button>
                        </div>
                    </form>
                </div>
                <div className="card card-gradient">
                    <div className="card-body">
                        <Table responsive>
                            <thead>
                                <tr>
                                    <th>[#]</th>
                                    <th>[Amount]</th>
                                    <th>[Email]</th>
                                    <th>[Bank Name]</th>
                                    <th>[Account-Number]</th>
                                </tr>
                            </thead>
                            <tbody>
                                {loanRecords.length >= 1 ? (
                                    loanRecords.map((data) => (
                                        <tr>
                                            <td><img style={{ borderRadius: "5px",}} src="/img/credit.jpg" width={50} alt="" srcset="" /></td>
                                            <td>{data.amount}</td>
                                            <td>{data.email}</td>
                                            <td>{data.bankName}</td>
                                            <td>{data.accountNumber}</td>
                                        </tr>
                                    ))
                                ) :
                                    <tr>
                                        <td colSpan="5" className='text-center'>No Records Available!</td>
                                    </tr>
                                }
                            </tbody>
                        </Table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Loan
