import { useState } from "react";
import "./css/Tabs.css";

function ChromeTabs() {
  const [activeTab, setActiveTab] = useState("tab1");
  const [isMaximized, maximize] = useState(false);
  function myFunction(){
    maximize(!isMaximized);
    console.log("Maximized state:", !isMaximized);
  };
  return (
    <div className={`tabs-container ${isMaximized ? "maximized" : "minimized"}`}>
      
      <div className="tabs">
        <div
          className={`tab ${activeTab === "tab1" ? "active" : ""}`}
          onClick={() => setActiveTab("tab1")}
        >
          Tab 1
        </div>
        <div
          className={`tab ${activeTab === "tab2" ? "active" : ""}`}
          onClick={() => setActiveTab("tab2")}
        >
          Tab 2
        </div>
        <div
          className={`tab ${activeTab === "tab3" ? "active" : ""}`}
          onClick={() => setActiveTab("tab3")}
        >
          Tab 3
        </div>
      </div>

      <div className="tab-content">
        {activeTab === "tab1" && <p>This is Tab 1 content.</p>}
        {activeTab === "tab2" && <p>This is Tab 2 content.</p>}
        {activeTab === "tab3" && <p>This is Tab 3 content.</p>}

        <div className={`arrow ${isMaximized ? "minimize-button" : "maximize-button"}`}
                                                        onClick={() => myFunction()}>
          <div className="indent-one"></div>
          <div className="indent-two"></div>
        </div> 
      </div>



    </div>
  );
}

export default ChromeTabs;
