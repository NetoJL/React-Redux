import React from "react";

import FamilyMember from "./FamilyMember";

export default props => {
    return (
        <div>
            <FamilyMember name="Pedro" {...props} />
            <FamilyMember name="José" {...props} />
            <FamilyMember name="Bia" lastName="Silva" />
        </div>
    )
}