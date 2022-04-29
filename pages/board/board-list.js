import Head from "next/head"
import tableStyles from "../common/styles/table.module.css"
import { useEffect ,useState} from "react"
import axios from "axios"

export default function BoardList(){
    const columns = ["관리기관명", "설치목적구분", "전화번호", "위도", "경도", "데이터기준일자"]
    const [data, setData] = useState([])
    useEffect(()=>{
            axios.get('http://localhost:5000/api/board/list').then(res=>{
                setData(res.data.boards)
        }).catch(err=>{console.log(err)})
    }, [])

    const register = () => {
        location.href = "./register";
    }

    const update = () => (event, id) => {
        event.preventDefault();
        location.href = `./update?${id}`
    }

    const deleteHandler = (event, id) => {
        event.preventDefault();
        if(confirm("이 데이터를 삭제하겠습니까?")) {
            axios.post(`${proxy}/api/delete/${id}`).then(() => {
                alert("삭제 완료");
                location.reload();
            }).catch(() => {
                alert("실패, 에러 발생")
            })
        }
    }

    return(<div>
        <div className={"btn-group"}>
            <input type={"button"} className={"btn btn-primary"} onClick={register} value={"등록"} />
        </div>
        <table className={tableStyles.table}>
            <thead>
                <tr><th colSpan={6}><h2>게시판</h2></th></tr>
            </thead>
            <tbody>
            <tr >
                {columns.map((column) => (
                <td key={column} >{column}</td>
                ))}
            </tr>
                    {data.length == 0 ? <tr >
                    <td colSpan={6} >데이터 없음</td>
                    </tr>
                    :data.map((board)=> (
                        <tr key={board.organization}>
                            <td>{board.purpose}</td>
                            <td>{board.phone}</td>
                            <td>{board.latitude}</td>
                            <td>{board.longtitude}</td>
                            <td>{board.date}</td>
                            <td>
                                <button type="button" className="btn btn-sm btn-warning" onClick={() => {update(event, board._id)} }>편집</button>
                                <button type="button" className="btn btn-sm btn-danger" onClick={() => {deleteHandler(event, board._id)}}>삭제</button>
                            </td>
                        </tr>
                    ))}
            </tbody>
        </table>
        </div>
    )
}