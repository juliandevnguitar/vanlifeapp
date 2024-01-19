import React from "react"
import { useOutletContext } from "react-router-dom"

export default function HostVanPhotos() {
    const { currentVan } = useOutletContext()
    return (
        <img src={currentVan.imageurl} className="host-van-detail-image" />
    )
}