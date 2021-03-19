import React, {Component} from 'react';
import Modal from '../UI/Modal/Modal';

const withErrorHandler = (WrappedComponent, axios) => {
    return class extends Component {
        state ={
            error: null,
            
        }
        componentDidMount(){
            this.requestInterceptor = axios.interceptors.request.use( req=> {
                this.setState({error: null});
                return req;
            })
       
            this.responseInterceptor = axios.interceptors.response.use(res=>res, error=> {
                this.setState({error: error});
            })
        }
        componentWillUnmount(){
       
        axios.interceptors.request.eject(this.requestInterceptor);
        axios.interceptors.response.eject(this.responseInterceptor);
        (console.log('will unmount', this.requestInterceptor, this.responseInterceptor));
        }
        errorConfirmed = ()=> {
            this.setState({error: null})
        }
        render(){
            return(
                <React.Fragment>
                    <Modal show={this.state.error} clicked={this.errorConfirmed}>{this.state.error ? this.state.error.message : null}</Modal>
    <WrappedComponent {...this.props} />
                </React.Fragment>
                
            );
        }
 
    }
}

export default withErrorHandler;