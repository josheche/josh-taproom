#!/bin/bash
concurrently "theme watch" "parcel watch scripts/index.js --out-dir assets --out-file bundle.js"