import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

// Higher-Order Component to wrap a component with a layout that includes Sidebar and Topbar.
const withLayout = (Component) => {
    return (props) => {
        return (
            <div className='flex bg-black min-h-screen min-w-screen'>
                {/* Sidebar: Sticks to the left side and remains fixed */}
                <div className='sticky top-0 left-0'>
                    <Sidebar />
                </div>

                {/* Main content area: Flex column to accommodate Topbar and the wrapped component */}
                <div className='flex flex-col w-full'>
                    <Topbar />
                    {/* Render the wrapped component with passed props */}
                    <Component {...props} />
                </div>
            </div>
        );
    };
};

export default withLayout;