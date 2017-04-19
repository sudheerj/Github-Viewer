import React from 'react'
import { DataList} from 'primereact';
import { Header } from 'primereact/components/datalist/DataList';

const Repos = ({repos}) => {
    function repoTemplate(repo) {
        if(!repo) {
            return;
        }


        return (
            <div className="ui-grid ui-grid-responsive ui-fluid" style={{ fontSize: '16px', padding: '20px', borderBottom: '1px solid #D5D5D5' }}>
                <div className="ui-grid-row">
                    <div className="ui-grid-col-9">
                        <div className="ui-grid ui-grid-responsive ui-fluid">
                            <div className="ui-grid-row" style={{fontWeight: 'bold'}}>
                                <a href={repo.html_url} style={{ color: 'royalblue',fontWeight: 'bold'}}>{repo.name}</a>
                            </div>
                            <div className="ui-grid-row">
                                <p>{repo.description}</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div>

            <DataList value={repos} itemTemplate={repoTemplate.bind(this)} paginator={true} rows={7}>
                <Header>
                    List of Repos
                </Header>
            </DataList>

        </div>
    );
}

Repos.propTypes = {
    username: React.PropTypes.string.isRequired,
    repos: React.PropTypes.array.isRequired
}

export default Repos