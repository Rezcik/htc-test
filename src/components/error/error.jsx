import React from "react";

export function Error({searchParams}) {
    return (
        <h3>
            По поисковому запросу {searchParams} ничего не найдено
        </h3>
    );
}
