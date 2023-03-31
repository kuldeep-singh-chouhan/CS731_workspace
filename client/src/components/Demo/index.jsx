// import { useState } from "react";
import useEth from "../../contexts/EthContext/useEth";
// import Title from "./Title";
// import Cta from "./Cta";
// import Contract from "./Contract";
import ContractBtns from "./ContractBtns";
// import Desc from "./Desc";
import NoticeNoArtifact from "./NoticeNoArtifact";
import NoticeWrongNetwork from "./NoticeWrongNetwork";

function Demo() {
  const { state, loggedUser } = useEth();
  // const [value, setValue] = useState("?");
  console.log(loggedUser, ' in Demo')
  const demo =
    <>
      {/* <Cta /> */}
      <div className="contract-container">
        {/* <Contract value={value} /> */}
        <ContractBtns/>
      </div>
      {/* <Desc /> */}
    </>;

  return (
    <div className="demo">
      {/* <Title /> */}
      {
        !state.artifact ? <NoticeNoArtifact /> :
          !state.contract ? <NoticeWrongNetwork /> :
            demo
      }
    </div>
  );
}

export default Demo;
