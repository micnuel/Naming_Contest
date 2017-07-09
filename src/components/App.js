import Header from './Header'
import ContestPreview from './ContestPreview';
import React from 'react';


class App extends React.Component{
    state={pageHeader:'Naming Contest',
        contests:this.props.intialContestData
    }
    componentDidMount(){
        fetch('/api/contests')
        .then(resp=>{
            resp.json().then(json=>{
            this.setState({
                contests:json.contestsData
            });
            })  
        })
        .catch(error=>{
            console.log('Error', error);
        })
    };
    componentWillUnmount(){
        
    };
    render(){
        return(
            <div className ="text-center">
                <div className="Header">
                    <Header headerMessage={this.state.pageHeader}/>
                </div>
                <div>
                    {this.state.contests.map(contest=>{
                        return (
                        <ContestPreview
                        key={contest.id}
                        contest {...contest}
                        />
                        )
                    })
                    }
                </div>
            </div>
        );
    }
}
    

export default App;