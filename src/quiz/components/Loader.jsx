import Blob1 from "./Blob1";
import Blob2Small from "./Blob2Small";

const Loader = () => {
    return (
        <>
            <Blob1></Blob1>
            <div className="container__center">
                <div className="lds-default">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
            <Blob2Small></Blob2Small>
        </>
    );
};

export default Loader;
