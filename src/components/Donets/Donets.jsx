import Donate from "../Donate/Donate";

const Donets = ({dontes}) => {
    return (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-content-center gap-y-5 p-5">
              {
                dontes?.map(donate => <Donate key={donate.id} donate={donate}/>)
              }
          </div>
        </>
    );
};

export default Donets;