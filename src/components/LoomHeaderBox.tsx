import React from 'react';
import LoomLogo from "./../img/loom.png";
import { Button } from 'antd';
import { Store } from '../common/Store';
import { fetchSkills, addSkill } from '../common/Actions';


export default function LoomHeaderBox() {
  const { state, dispatch } = React.useContext(Store);


  React.useEffect(() => {
    const fetchSkillsFromLoom = async() => {
      await fetchSkills(state.loomObj, dispatch);
    }

    if (state.loomObj){
      console.log("in loomheaderbox.useeffect(), have loom")
      fetchSkillsFromLoom();
    }
  }, [state.loomObj]);

  console.log('skills fetched from contract:', state.skills);

  return (
    <div className="fullFlexRow">
        <div className="flexCol">
          <div className="boxHead flexRow">
            <div><img className="boxHeadLogo" src={LoomLogo}/></div>
            <div>Loom Network Contract on ExtDev</div>
          </div>
          <div className="boxBody">
            <div className="boxBodyStatus">
              <div>
                {state.loomContractAddr}
              </div>
              <div>
                number of loom fetched values: {state.skills.length}
              </div>    
              <div>.</div>
            </div>
            <div className="boxBodybuttons">
              <Button
                type="dashed"
                onClick={ async() => {
                  let ts =Date.now();
                  console.log(ts);
                  await addSkill(`directContractAddAt${ts}`, state.loomObj);
                }}
              >
                Add Value Directly Through Loom
              </Button>
            </div>
          </div>
        </div>
      </div>
  )
}
