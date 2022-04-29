import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { sacActions } from "../../redux/reducers/sacReducer.ts";
import axios from "axios";


export default function register() {
    const proxy = 'http://localhost:4000'

    const dispatch = useDispatch();
    const [data, setData] = useState({
        _id : "",
        organization : "",
        purpose : "",
        phone : "",
        latitude : "",
        longtitude : "",
        date : ""
    });

    useEffect(()=>{
        const id = window.location.search.split('?')[1];
        axios.get(`${proxy}/board/list/${id}`).then(res => {
            setData(res.data.sac);
        })
    }, []);

    const handleChange = e => {
        e.preventDefault()
        const{name, value} = e.target;
        setData({...data,[name]: value});
    }

    return (<div>
        <div className={"border-bottom mt-4 mb-4"}>
            <h2 className="bd-title" id="content">2018. Seoul Art Center</h2>
        </div>
        <br />
        <form onSubmit={e =>{
            e.preventDefault()
            dispatch(sacActions.editRequest(sacData))
        }
        }>
            <div className="form-group row">
                <label className={"col-form-label col-2"}>관리기관명</label>
                <div className={"col-10"}>
                    <select className={"form-control"} onChange={handleChange} name={"place"} value={sacData.place}>
                        <option>대구 서구청</option>
                        <option>대구 중구청</option>
                    </select>
                </div>
            </div>
            <br/>
            <div className="form-group row">
                <label className={"col-form-label col-2"}>설치목적구분</label>
                <div className={"col-10"}>
                    <option>불법주정차</option>
                    <option>방범용</option>
                </div>
            </div>
            <br/>
            <div className="form-group row">
                <label className={"col-form-label col-2"}>전화번호</label>
                <div className={"col-10"}>
                    <input type={"number"} className={"form-control"} onChange={handleChange} name={"phone"} value={data.phone} />
                </div>
            </div>
            <br/>
            <div className="form-group row">
                <label className={"col-form-label col-2"}>위도</label>
                <div className={"col-10"}>
                    <input type={"number"} className={"form-control"} onChange={handleChange} name={"latitude"} value={data.latitude} />
                </div>
            </div>
            <br/>
            <div className="form-group row">
                <label className={"col-form-label col-2"}>경도</label>
                <div className={"col-10"}>
                    <select className={"form-control"} onChange={handleChange} name={"longtitude"} value={data.longtitude}>
                        <option>대관</option>
                        <option>기획</option>
                    </select>
                </div>
            </div>
            <br/>
            <div className="form-group row">
                <label className={"col-form-label col-2"}>기준일자</label>
                <div className={"col-10"}>
                    <input type={"date"} className={"form-control"} onChange={handleChange} name={"date"} value={data.date} />
                </div>
            </div>
            <br />
            <button className={"btn btn-warning"} type="submit">수정</button>
        </form>
    </div>)
}