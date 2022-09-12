import styles from "./version.module.css";

function VersionPage(){

    return(
        <div className={styles.container}>
            <h6>V 1.0.1 업데이트</h6><hr/>
            <p>
                - 홈화면 line의 중앙에 생상이 없는 문제 해결<br/>
                - 홈화면 화살표의 크기가 다른 문제 해결<br/>
                - 홈화면의 일요일 등교 학내순환 텍스트 변경<br/>
                - 즐겨찾기 화면에서 api 호출을 1번만 하도록 변경
            </p>
        </div>
    )


}

export default VersionPage;