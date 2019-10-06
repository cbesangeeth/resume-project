package com.sk.resumeservice.common;

import org.springframework.http.HttpStatus;

import java.io.Serializable;
import java.util.HashMap;
import java.util.Objects;

public class APIResponse implements Serializable {

    private Integer status;
    private Object data;

    public APIResponse() {
        this.status = HttpStatus.OK.value();
        this.data = new HashMap<String, Object>();
    }

    @Override
    public boolean equals(Object other) {
        if (this == other) {
            return true;
        }

        if (other == null) {
            return false;
        }

        if (getClass() != other.getClass()) {
            return false;
        }

        APIResponse otherApiResponse = (APIResponse) other;

        return Objects.equals(status, otherApiResponse.status)
                && Objects.equals(data, otherApiResponse.data);
    }

    @Override
    public int hashCode() {
        return Objects.hash(status, data);
    }

    @Override
    public String toString() {
        return "<APIResponse STATUS: " + getStatus() + ", DATA: " + getData() + ">";
    }

    public Integer getStatus() {
        return status;
    }

    public APIResponse setStatus(Integer status) {
        this.status = status;

        return this;
    }

    public Object getData() {
        return data;
    }

    public APIResponse setData(Object data) {
        this.data = data;

        return this;
    }

}
