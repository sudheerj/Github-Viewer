import React from 'react'
import { DataList} from 'primereact';
import { Header } from 'primereact/components/datalist/DataList';

const NotesList = ({notes}) => {
    return (
        <DataList value={notes}  paginator={true} rows={5} style={{ marginTop: '26px'}}>
          <Header>
            List of Notes
          </Header>
        </DataList>
    );
}

NotesList.propTypes = {
    notes: React.PropTypes.array.isRequired
}

export default NotesList