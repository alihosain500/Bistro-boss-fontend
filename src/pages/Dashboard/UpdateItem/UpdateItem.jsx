import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../../Components/SectionTitle";


const UpdateItem = () => {
    const item = useLoaderData();
    console.log('item', item);
    return (
        <div>
            <SectionTitle heading="Update an Item" subHeading="Refuresh info"></SectionTitle>
        </div>
    );
};

export default UpdateItem;