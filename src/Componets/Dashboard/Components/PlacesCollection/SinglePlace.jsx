const SinglePlace = ({place , index}) => {

    const {name,location,image}=place;

  return (
   
      <tr>
        <td>{index+1}</td>

        <td>
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12">
              <img
                src={image}
                alt="Avatar Tailwind CSS Component"
              />
            </div>
          </div>
        </td>

        <td>{name}</td>

        <td>{location}</td>

        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
    
  );
};

export default SinglePlace;
