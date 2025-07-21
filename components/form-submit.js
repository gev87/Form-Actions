"use client"

import { useFormStatus } from "react-dom";

export default function FormSubmit() {
    const status = useFormStatus();
    console.log("Form status:",status);
    
    if (status.pending) {
        return <span>Creating Post...</span>;
    }

    return (
      <>
        <button type="reset">Reset</button>
        <button>Create Post</button>
      </>
    );
}