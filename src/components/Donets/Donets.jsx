import Donate from "../Donate/Donate";

const Donets = ({dontes}) => {
    return (
        <>
          <div>
              {
                dontes?.map(donate => <Donate key={donate.id} donate={donate}/>)
              }
          </div>
        </>
    );
};

export default Donets;