import React from 'react';

const ToggleButton = () => {
    return (
        <div class="form-check form-switch ms-3 d-none d-lg-block">
            <input class="form-check-input text-info me-1" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
            <label class="form-check-label text-white" for="flexSwitchCheckDefault">Dark Mode</label>
        </div>
    );
};

export default ToggleButton;