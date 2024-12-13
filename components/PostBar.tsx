"use client";

import { useState } from "react";
import { Modal } from "./Modal";

export function PostBar() {
  const [dialogVisible, setDialogVisible] = useState<boolean>(false);

  return (
    <>
      <div className="flex-grow p-8 pl-12 text-lg font-bold">
        <button
          className="py-2 px-6 rounded hover:bg-amber-200 hover:text-black active:bg-amber-100 transition ease-in-out"
          onClick={() => setDialogVisible(true)}
        >
          + Post
        </button>
      </div>
      {dialogVisible && (
        <Modal title="Post Event" onClose={() => setDialogVisible(false)}>
          <form action="#" method="post" className="mx-8">
            <div className="flex gap-4">
              <div className="flex-grow mb-2">
                <label htmlFor="title" className="block">
                  Title
                </label>
                <input
                  name="title"
                  type="text"
                  maxLength={32}
                  className="w-full px-1"
                />
              </div>
              <div>
                <label htmlFor="start" className="block">
                  Time
                </label>
                <input name="start" type="time" className="px-1" /> &ndash;{" "}
                <input name="end" type="time" className="px-1" />
              </div>
            </div>

            <div className="mb-2">
              <label htmlFor="address" className="block">
                Address
              </label>
              <input name="address" type="text" className="w-full px-1" />
            </div>

            <div className="flex gap-4 mb-2">
              <div className="flex-grow">
                <label htmlFor="city" className="block">
                  City
                </label>
                <input name="city" className="w-full px-1" />
              </div>
              <div>
                <label htmlFor="state" className="block">
                  State
                </label>
                <select name="state" id="state" className="bg-white p-0.5">
                  <option value="">--</option>
                  <option value="AL">AL</option>
                  <option value="AK">AK</option>
                  <option value="AZ">AZ</option>
                  <option value="AR">AR</option>
                  <option value="CA">CA</option>
                  <option value="CO">CO</option>
                  <option value="CT">CT</option>
                  <option value="DE">DE</option>
                  <option value="FL">FL</option>
                  <option value="GA">GA</option>
                  <option value="HI">HI</option>
                  <option value="ID">ID</option>
                  <option value="IL">IL</option>
                  <option value="IN">IN</option>
                  <option value="IA">IA</option>
                  <option value="KS">KS</option>
                  <option value="KY">KY</option>
                  <option value="LA">LA</option>
                  <option value="ME">ME</option>
                  <option value="MD">MD</option>
                  <option value="MA">MA</option>
                  <option value="MI">MI</option>
                  <option value="MN">MN</option>
                  <option value="MS">MS</option>
                  <option value="MO">MO</option>
                  <option value="MT">MT</option>
                  <option value="NE">NE</option>
                  <option value="NV">NV</option>
                  <option value="NH">NH</option>
                  <option value="NJ">NJ</option>
                  <option value="NM">NM</option>
                  <option value="NY">NY</option>
                  <option value="NC">NC</option>
                  <option value="ND">ND</option>
                  <option value="OH">OH</option>
                  <option value="OK">OK</option>
                  <option value="OR">OR</option>
                  <option value="PA">PA</option>
                  <option value="RI">RI</option>
                  <option value="SC">SC</option>
                  <option value="SD">SD</option>
                  <option value="TN">TN</option>
                  <option value="TX">TX</option>
                  <option value="UT">UT</option>
                  <option value="VT">VT</option>
                  <option value="VA">VA</option>
                  <option value="WA">WA</option>
                  <option value="WV">WV</option>
                  <option value="WI">WI</option>
                  <option value="WY">WY</option>
                </select>
              </div>
              <div>
                <label htmlFor="zip" className="block">
                  ZIP
                </label>
                <input name="zip" className="w-32 px-1" />
              </div>
            </div>

            <label htmlFor="description" className="block">
              Description
            </label>
            <textarea
              name="description"
              className="resize-none w-full h-32 px-1 mb-2"
              maxLength={256}
            />

            <div className="flex justify-end">
              <button
                type="submit"
                className="px-6 py-1 bg-amber-200 hover:bg-amber-100 hover:text-black active:bg-amber-100  transition ease-in-out rounded-lg"
              >
                Post
              </button>
            </div>
          </form>
        </Modal>
      )}
    </>
  );
}
